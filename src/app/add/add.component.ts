import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private localStorageService: LocalstorageService,
    private fb: FormBuilder
  ) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

}
