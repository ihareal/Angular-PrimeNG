import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Input, AfterContentInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { makeAnimationEvent } from '@angular/animations/browser/src/render/shared';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit, OnChanges {
  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalstorageService
  ) { }
  @Input() entity: string;
  @Input() entityId: number;
  test = 'hello world';
  profileForm: FormGroup;
  name;
  number;
  type;
  fields = ['name', 'value', 'type'];
  info: any[];
  editForm = this.fb.group({
    name: ['', Validators.required],
    number: ['', Validators.required],
    type: ['', Validators.required]
  });
  tableInfo = [{
    id: 3,
    name: 'editName',
    number: 10,
    type: 'editType'
  }];
  ngOnInit() {
    this.setInputValues();
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
  }
  create() {
    this.localStorageService.setEntity(this.name, this.number, this.type);
    this.localStorageService.createEntity(this.tableInfo);
  }
  delete() {
    // const entities = this.localStorageService.getInfo();
    // const original = entities.find(e => e.id === 1);
    // entities.splice(original, 1);
    // localStorage.setItem('type', JSON.stringify(entities));
    this.localStorageService.deleteEntity();
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
  }
  numberInput() {
    this.number = this.editForm.controls.number.value;
  }
  typeInput() {
    this.type =  this.editForm.controls.name.value;
  }
  setFieldValues() {
  }
}


