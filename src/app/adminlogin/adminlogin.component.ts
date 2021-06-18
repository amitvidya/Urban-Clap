import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminserviceService} from '../adminservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  ServerResponse = '';

  constructor(private adminservice: AdminserviceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  adminlogin(loginform: any) {
    this.adminservice.admin1login(loginform).subscribe((res: any) => {
      if (res.message === 'success') {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Login success&nbsp;<i class="far fa-check-circle"></i></span>';
        this.router.navigateByUrl('admin/home');
      } else if (res.message === 'invalidemail') {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Invalid email&nbsp;<i class="far fa-times-circle"></i></span>';
      } else if (res.message === 'invalidusername') {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Invalid username&nbsp;<i class="far fa-times-circle"></i></span>';
      } else {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Invalid password&nbsp;<i class="far fa-times-circle"></i></span>';
      }
    });
  }
}
