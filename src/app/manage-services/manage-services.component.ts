import {Component, OnInit} from '@angular/core';
import {WorkerservicesService} from '../workerservices.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-services',
  templateUrl: './manage-services.component.html',
  styleUrls: ['./manage-services.component.css']
})
export class ManageServicesComponent implements OnInit {
  ServerResponse = '';
  fetdata: any = [];
  servicedata: any = [];
  photo: any = null;

  constructor(private workervice: WorkerservicesService, private router: Router) {
  }

  ngOnInit(): void {
    this.workervice.fetchcategory().subscribe((res: any) => {
      this.fetdata = res.message;
      console.log(this.fetdata);
    });
    this.workervice.getdatawork().subscribe((res: any) => {
      this.servicedata = res;
      console.log(this.servicedata);
    });
    this.workervice.checksession().subscribe((res: any) => {
      if (res.message === 'no') {
        this.router.navigateByUrl('worker/login');
      } else {
        this.router.navigateByUrl('worker/servi');
      }
    });
  }

  getfile(event: any) {
    // console.log(event.target.files[0]);
    this.photo = event.target.files[0];
    console.log(this.photo);
  }

  saveuserdata(formdatatext: any) {
    let formdata = new FormData();
    formdata.append('photo', this.photo);
    for (let a in formdatatext) {
      formdata.append(a, formdatatext[a]);
    }
    this.workervice.updatedata(formdata).subscribe((res: any) => {
      console.log(res.message);
      this.ngOnInit();
    });
  }

  deletcate(data: any) {
    let formdata = new FormData();
    formdata.append('id', data);
    this.workervice.deletecateory(formdata).subscribe((res: any) => {
      this.ngOnInit();
    });
  }

  logout() {
    this.workervice.logout().subscribe((res) => {
    });
  }

  category1(formdata: any) {
    this.workervice.getcategory(formdata).subscribe((res: any) => {
      if (res.message === 'success') {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Service Added&nbsp;<i class="far fa-check-circle"></i></span>';
      }
      this.ngOnInit();
    });
  }
}
