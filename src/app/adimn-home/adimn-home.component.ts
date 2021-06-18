import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {AdminserviceService} from '../adminservice.service';

@Component({
  selector: 'app-adimn-home',
  templateUrl: './adimn-home.component.html',
  styleUrls: ['./adimn-home.component.css']
})
export class AdimnHomeComponent implements OnInit {
  fet: any = [];

  constructor(private adminservice: AdminserviceService, private router: Router) {
  }


  logout() {
    this.adminservice.adminlogout().subscribe((res: any) => {
      if (res.message === 'yes') {
        this.router.navigateByUrl('admin/login');
      }
    });
  }

  ngOnInit(): void {
    this.adminservice.adminchecksession().subscribe((res: any) => {
      if (res.message === 'no') {
        this.router.navigateByUrl('admin/login');


      }
    });
    this.adminservice.getentrydata().subscribe((res) => {
      this.fet = res;
    });
  }
}
