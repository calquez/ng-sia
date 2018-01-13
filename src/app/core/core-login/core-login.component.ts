import {LoginUser} from '../../model/login-user';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-core-login',
  templateUrl: './core-login.component.html',
  styleUrls: ['./core-login.component.css']
})
export class CoreLoginComponent implements OnInit {

  private user: LoginUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
  }


  private login() {

    this.router.navigate(['/ng-sia']);
  }
}
