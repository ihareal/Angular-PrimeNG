import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from '@angular/forms';


import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: '';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  loading = false;
  submitted = false;
  returnUrl: string;
  index: number = 2;

  // user: any = '1232131';
  message = 'required';
  validity = false;
  fields = ['login', 'password'];
  formLogin: FormGroup;
  ngOnInit(): void {
    this.authenticationService.logout();
    // localStorage.setItem('currentUser', JSON.stringify(this.user));
    // console.log(localStorage.getItem('currentUser'));
    this.formLogin = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.formLogin.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formLogin.invalid) {
        return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
}
  // tslint:disable-next-line:use-life-cycle-interface
  // ngOnChanges(changes: SimpleChanges): void {
  // }

}
