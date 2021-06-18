import {Component, OnInit} from '@angular/core';
import {AdminserviceService} from '../adminservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  ServerResponse = '';
  fetdata: any = [];

  constructor(private adminservice: AdminserviceService, private router: Router) {
  }

  ngOnInit(): void {
    this.adminservice.fetchcategory().subscribe((res: any) => {
      this.fetdata = res.message;
      console.log(this.fetdata);
    });
    this.adminservice.adminchecksession().subscribe((res: any) => {
      if (res.message === 'no') {
        this.router.navigateByUrl('admin/login');


      }
    });
  }

  deletcate(data: any) {
    let formdata = new FormData();
    formdata.append('id', data);
    this.adminservice.deletecateory(formdata).subscribe((res: any) => {
      this.ngOnInit();
    });
  }

  category1(formdata: any) {
    this.adminservice.getcategory(formdata).subscribe((res: any) => {
      if (res.message === 'success') {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Category Added&nbsp;<i class="far fa-check-circle"></i></span>';
      }
      // window.location.reload();
      this.ngOnInit();
    });
  }
}
