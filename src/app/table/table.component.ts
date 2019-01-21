import { Component, OnInit } from '@angular/core';
import { Data } from '../_models/data';
import { DataArray } from '../_models/mock-data';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { LocalstorageService } from '../localstorage.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: User[] = [];

  displayDialog: Boolean;
  selectedData: Data;
  newData: boolean;
  editView: boolean;
  formOut: FormGroup;
  datalot: Data[];
  data: Data = {};
  cols: any;
  stash: any[];
  result: any[];
  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private userService: UserService,
    private autentificationService: AuthenticationService,
    private localstorafeService: LocalstorageService
    ) {
  }
  initTable() {
    // this.localstorafeService.setInfo();
    this.stash = this.localstorafeService.getInfo();
    this.result = Object.keys(this.stash).map(i => this.stash[i]);
    for (let i = 0; i < this.result.length; i++) {
       console.log(this.result[i]);
    }
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
    this.formOut = this.fb.group({});
    this.datalot = this.dataService.getData();
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'number', header: 'Number' },
      { field: 'type', header: 'Type' },
    ];
  }
  ngOnInit() {
    // this.localstorafeService.setInfo();
    this.initTable();
  }
  showDialogToAdd() {
    this.displayDialog = true;
    this.newData = true;
  }

  save() {
    let datalot = [...this.datalot];
    if (this.newData) {
      datalot.push(this.data);
    } else {
      datalot[this.datalot.indexOf(this.selectedData)] = this.data;
    }

    this.datalot = datalot;
    this.data = {};
    this.displayDialog = false;
    this.editView = false;
  }
  delete() {
    this.data = null;
    let index = this.datalot.indexOf(this.selectedData);
    this.datalot = this.datalot.filter((val, i) => i != index);
    this.displayDialog = false;
    this.editView = false;
  }
  onRowSelect(event) {
    
    this.editView = true;
    this.newData = false;
    // this.data = this.cloneData(event.data);
    this.displayDialog = true;
  }
  cloneData(d: Data) {
    const data = null;
    for (let prop in d) {
      data[prop] = d[prop];
    }
    return data;
  }

  input() {
    let array: any[];
    array = this.dataService.getData();
    let index = this.datalot.indexOf(this.selectedData);
    let inputs = document.querySelectorAll('input');
    for (const i of <any>inputs) {
    }
  }
  clickTable(event: any) {
    console.warn(event);
  }
  click(id){
  }
  getFieldValue(field: any) {
    return this.datalot.find(f => f.name === field).value;
  }
  showEditDialog(entity) {
    this.data = entity;
    this.displayDialog = true;
  }
  save(){
    ///service 
    this.initTable();
  }
}
