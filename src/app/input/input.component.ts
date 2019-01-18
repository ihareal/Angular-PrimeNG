import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnChanges, OnInit {
  @Input() inputForm: FormGroup;
  @Input() name: any;
  // @Input() data: any;
  constructor(fb: FormBuilder) { }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.name && changes.name.firstChange) {
      this.inputForm.addControl(this.name, new FormControl('', Validators.minLength(3)));
    }
  }
   ngOnInit() {
  }
}
