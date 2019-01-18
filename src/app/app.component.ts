import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';
  constructor(private fb: FormBuilder) {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
  }
}

