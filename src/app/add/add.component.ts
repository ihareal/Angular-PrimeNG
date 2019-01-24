import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id: number;
  localObject: any;
  mock_params = {
    name: 'Ihar',
    number: 2,
    type: 'Type add'
  };
  constructor(
    private router: ActivatedRoute,
    private localStorageService: LocalstorageService,
    private fb: FormBuilder
  ) { }
  addForm: FormGroup;
  ngOnInit() {
   this.id = parseInt(this.router.snapshot.paramMap.get('id'), 10);
   this.localObject = this.localStorageService.getId(this.id);
    this.addForm = this.fb.group({
      name: [this.localObject.name, Validators.required],
      number: [this.localObject.number, Validators.required],
      type: [this.localObject.type, Validators.required]
    });
  }

}
