import { Component, OnInit } from '@angular/core';
import { CheckForLoginService } from '../check-for-login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private checkForLogin: CheckForLoginService,
    private router: Router
    ) { }
  ngOnInit() {
    if (this.checkForLogin.checkLog()) {
      this.router.navigate(['/table']);
    } else if (!this.checkForLogin.checkLog()) {
      this.router.navigate(['/login']);
    }
  }
}
