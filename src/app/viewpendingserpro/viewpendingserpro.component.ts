import {Component, OnInit} from '@angular/core';
import {AdminserviceService} from '../adminservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-viewpendingserpro',
  templateUrl: './viewpendingserpro.component.html',
  styleUrls: ['./viewpendingserpro.component.css']
})
export class ViewpendingserproComponent implements OnInit {
  fetdata: any = [];

  constructor(private adminservice: AdminserviceService, private router: Router) {
  }

  ngOnInit(): void {
    this.adminservice.fetchpendingdata().subscribe((res) => {
      this.fetdata = res;
    });
    this.adminservice.adminchecksession().subscribe((res: any) => {
      if (res.message === 'no') {
        this.router.navigateByUrl('admin/login');
      }
    });
  }

  updatedata(data: any) {
    let formdata = new FormData();
    formdata.append('id', data);
    formdata.append('status', 'approved');
    this.adminservice.updatedata(formdata).subscribe((res: any) => {
      console.log(res.message);
      this.ngOnInit();
    });
  }

  blockser(data: any){
    let formdata = new FormData();
    formdata.append('id', data);
    formdata.append('status', 'blocked');
    this.adminservice.updatedata(formdata).subscribe((res: any) => {
      console.log(res.message);
      this.ngOnInit();
    });

  }
}
