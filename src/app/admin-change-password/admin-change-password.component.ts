import {Component, OnInit} from '@angular/core';
import {UserservicesService} from '../userservices.service';
import {Router} from '@angular/router';
import {AdminserviceService} from '../adminservice.service';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent implements OnInit {
  ServerResponse = '';
  passwordmatch = false;
  email = '';

  constructor(private adminservice: AdminserviceService, private router: Router) {
  }


  checkpassword(password: any, confirmpassword: any) {
    this.passwordmatch = false;
    if (password.value.length > 0) {
      if (password.value !== confirmpassword.value) {
        this.passwordmatch = true;
      }
    }
  }

  updatepassword(formdata: any) {
    this.adminservice.adminchangepassword(formdata).subscribe((res: any) => {
      if (res.message === 'success') {
        this.ServerResponse = '<div class=\'alert alert-success\'>Password Updated</div>';
      } else if (res.message === 'invalidpassword') {
        this.ServerResponse = '<div class=\'alert alert-danger\'>password and confirm password doesnt match</div>';
      } else {
        this.ServerResponse = '<div class=\'alert alert-danger\'>Error in updation</div>';
      }
    });
  }


  ngOnInit(): void {
    this.adminservice.adminchecksession().subscribe((res: any) => {
      if (res.message === 'no') {
        this.router.navigateByUrl('admin/login');


      } else {
        this.email = res.email;
      }
    });
  }
}
