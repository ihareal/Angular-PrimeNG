import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { makeAnimationEvent } from '@angular/animations/browser/src/render/shared';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
 constructor(private fb: FormBuilder) { }
  editForm: FormGroup;
  fields = ['name', 'value', 'type'];
  ngOnInit() {
    this.editForm = this.fb.group({});
  }
}
  // {
  //   this.editForm = this.fb.group({
  //     name:[''],
  //     value:[''],
  //     type: [''],
  //     fieldId:['']
  //   });
  //   debugger
  //   this.formReady.emit(this.editForm);
  // }

