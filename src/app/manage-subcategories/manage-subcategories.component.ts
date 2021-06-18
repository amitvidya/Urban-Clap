import {Component, OnInit} from '@angular/core';
import {AdminserviceService} from '../adminservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-subcategories',
  templateUrl: './manage-subcategories.component.html',
  styleUrls: ['./manage-subcategories.component.css']
})
export class ManageSubcategoriesComponent implements OnInit {
  categories: any = [];
  ServerResponse = '';
  fetdata: any = [];

  constructor(private adminservice: AdminserviceService, private router: Router) {
  }

  ngOnInit(): void {
    this.adminservice.getAllCategories().subscribe((res: any) => {
      this.categories = res;
    });
    this.adminservice.fetchsubcat().subscribe((res: any) => {
      this.fetdata = res.message;
    });
    this.adminservice.adminchecksession().subscribe((res: any) => {
      if (res.message === 'no') {
        this.router.navigateByUrl('admin/login');


      }
    });
  }

  deletcate(data: any) {
    const formdata = new FormData();
    formdata.append('id', data);
    this.adminservice.deletesubcat(formdata).subscribe((res: any) => {
      window.location.reload();
    });
  }

  subcategory1(formdata: any) {
    this.adminservice.getsubcategories(formdata).subscribe((res: any) => {
      if (res.message === 'success') {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Category Added&nbsp;<i class="far fa-check-circle"></i></span>';
      }
      window.location.reload();
    });
  }
}
