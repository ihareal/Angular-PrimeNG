import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Input, AfterContentInit, ɵConsole, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { makeAnimationEvent } from '@angular/animations/browser/src/render/shared';
import { LocalstorageService } from '../localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit, OnChanges, AfterViewInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private localStorageService: LocalstorageService
  ) { }
  test = 'hello world';
  profileForm: FormGroup;
  name;
  number;
  type;
  id;
  editForm: FormGroup;
  fields = ['name', 'value', 'type'];
  info: any[];
    // Make a typisation entityObject:Entity
  entityObject;
  tableInfo = [{
    name: 'editName',
    number: 10,
    type: 'editType'
  }];
  ngAfterViewInit() {
    // this.tableInfo[0].name = this.localStorageService.localEntityObject.name;
    // this.tableInfo[0].number = this.localStorageService.localEntityObject.number;
    // this.tableInfo[0].type = this.localStorageService.localEntityObject.type;
  }
  ngOnInit() {
    this.id = this.router;
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
    // let
    // this.localStorageService.updateEntity();
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
    this.router.navigate(['/table']);
  }
  setInputValues() {
    /// there will be entity fields instead of mock-up parametrs
    this.editForm.controls.name.setValue(this.localStorageService.localEntityName);
    this.editForm.controls.number.setValue(this.localStorageService.localEntityNumber);
    this.editForm.controls.type.setValue(this.localStorageService.localEntityType);
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


