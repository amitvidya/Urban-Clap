import {Component, OnInit} from '@angular/core';
import {UserservicesService} from '../userservices.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  ServerResponse = '';
  emailresponse = '';
  passwordmatch = true;
  check = true;
  check2 = true;

  constructor(private userservice: UserservicesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  checkpassword(password: any, confirmpassword: any) {
    this.passwordmatch = true;
    this.check2 = true;
    if (password.value !== confirmpassword.value) {
      this.passwordmatch = false;
      this.check2 = false;
    }
  }

  checkemailexist(emailctrl: any) {
    this.check = true;
    this.emailresponse = '';
    this.userservice.checkemailexistservice(emailctrl).subscribe((res: any) => {
      if (res.message === 'yes') {
        this.emailresponse = emailctrl + ' is already exist';
        this.check = false;
      }

    });
  }

  saveuserdata(formdata: any) {
    this.userservice.usersign(formdata).subscribe((res: any) => {
      if (res.message === 'success') {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Signup success&nbsp;<i class="far fa-check-circle"></i></span>';
      }
    });
  }
}
