import {Component, OnInit} from '@angular/core';
import {AdminserviceService} from '../adminservice.service';
import {Router} from '@angular/router';
import {WorkerservicesService} from '../workerservices.service';

@Component({
  selector: 'app-worker-home',
  templateUrl: './worker-home.component.html',
  styleUrls: ['./worker-home.component.css']
})
export class WorkerHomeComponent implements OnInit {
  servicedata: any = [];
  photo: any = null;
  paid: any = [];
  prev: any = [];

  constructor(private workervice: WorkerservicesService, private router: Router) {
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

  logout() {
    this.workervice.logout().subscribe((res) => {
    });
  }

  accept(data: any) {
    let formdata = new FormData();
    formdata.append('id', data);
    this.workervice.statuschange(formdata).subscribe((res: any) => {
      if (res.message === 'success') {
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {
    this.workervice.getdatawork().subscribe((res) => {
      this.servicedata = res;
      console.log(this.servicedata);
    });
    this.workervice.getprevbook().subscribe((res) => {
      this.prev = res;
    });
    this.workervice.getpiad().subscribe((res) => {
      this.paid = res;
      console.log(this.paid);
    });
    this.workervice.checksession().subscribe((res: any) => {
      if (res.message === 'no') {
        this.router.navigateByUrl('worker/login');
      } else {
        this.router.navigateByUrl('worker/home');
      }
    });
  }
}
