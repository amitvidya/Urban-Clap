import {Component, OnInit} from '@angular/core';
import {UserservicesService} from '../userservices.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  ServerResponse = '';

  constructor(private userservice: UserservicesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveuserdata(formdata: any) {
    this.userservice.userlogin(formdata).subscribe((res: any) => {
      if (res.message === 'invalidemail') {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Invalid Email&nbsp;<i class="far fa-times-circle"></i></span>';
      } else if (res.message === 'invalidpassword') {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Invalid Password&nbsp;<i class="far fa-times-circle"></i></span>';
      }else{
        this.ServerResponse = '<span class=\'alert alert-dark\'>Login success&nbsp;<i class="far fa-check-circle"></i></span>';
        this.router.navigateByUrl('user/home');
      }
    });
  }
}
