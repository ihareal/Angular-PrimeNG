import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Input, AfterContentInit, ɵConsole, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { makeAnimationEvent } from '@angular/animations/browser/src/render/shared';
import { LocalstorageService } from '../localstorage.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit, OnChanges, AfterViewInit {
  constructor(
    private routeForId: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private localStorageService: LocalstorageService
  ) { }
  profileForm: FormGroup;
  name;
  number;
  type;
  id: number;
  editForm: FormGroup;
  fields = ['name', 'value', 'type'];
  info: any[];
    // Make a typisation entityObject:Entity
  entityObject: any;
  tableInfo = {
    name: 'editName',
    number: 10,
    type: 'editType'
  };
  ngAfterViewInit() {
    // this.tableInfo[0].name = this.localStorageService.localEntityObject.name;
    // this.tableInfo[0].number = this.localStorageService.localEntityObject.number;
    // this.tableInfo[0].type = this.localStorageService.localEntityObject.type;
  }
  ngOnInit() {
    // get id from url
    this.id = parseInt(this.routeForId.snapshot.paramMap.get('id'), 10);
    this.entityObject = this.localStorageService.getId(this.id);
    this.editForm = this.fb.group({
      name: [this.entityObject.name, Validators.required],
      number: [this.entityObject.number, Validators.required],
      type: [this.entityObject.type, Validators.required]
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.editForm) {
    }
  }
  get formControls() {
    return console.log(this.editForm.controls);
  }
  update() {
    this.localStorageService.updateEntity(this.tableInfo);
    this.router.navigate(['/table']);
  }
  create() {
    this.localStorageService.createEntity(this.tableInfo);
    this.router.navigate(['/table']);
  }
  delete() {
    // const entities = this.localStorageService.getInfo();
    // const original = entities.find(e => e.id === 1);
    // entities.splice(original, 1);
    // localStorage.setItem('type', JSON.stringify(entities));
    // this.localStorageService.deleteEntity();
    this.localStorageService.deleteEntity(this.id);
    this.router.navigate(['/table']);
  }
  // getInputValues() {
  //  let test = this.editForm.controls.name.value;
  //  console.log(test);
  // }

  nameInput() {
    this.name =  this.editForm.controls.name.value;
    this.tableInfo[0].name = this.editForm.controls.name.value;
  }
  numberInput() {
    this.number = this.editForm.controls.number.value;
    this.tableInfo[0].number = this.editForm.controls.number.value;
  }
  typeInput() {
    this.type =  this.editForm.controls.name.value;
    this.tableInfo[0].type = this.editForm.controls.type.value;
  }
  setFieldValues() {
  }
}


