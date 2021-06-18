import {Component, OnInit} from '@angular/core';
import {AdminserviceService} from '../adminservice.service';
import {Router} from '@angular/router';
import {WorkerservicesService} from '../workerservices.service';

@Component({
  selector: 'app-workerlogin',
  templateUrl: './workerlogin.component.html',
  styleUrls: ['./workerlogin.component.css']
})
export class WorkerloginComponent implements OnInit {
  ServerResponse = '';

  constructor(private workerservice: WorkerservicesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  workerlogin(loginform: any) {
    this.workerservice.worklogin(loginform).subscribe((res: any) => {
      if (res.message === 'blocked') {
        this.ServerResponse = '<span class=\'alert alert-dark\'>You are blocked by admin&nbsp;<i class="far fa-times-circle"></i></span>';
      } else if (res.message === 'invalidemail') {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Email not registered&nbsp;<i class="far fa-times-circle"></i></span>';
      } else if (res.message === 'success') {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Login Success&nbsp;<i class="far fa-check-circle"></i></span>';
        this.router.navigateByUrl('worker/home');
      } else {
        this.ServerResponse = '<span class=\'alert alert-dark\'>Invalid password&nbsp;<i class="far fa-times-circle"></i></span>';
      }
    });
  }

  checkse() {
    this.workerservice.checksession().subscribe((res: any) => {
      if (res.message === 'no') {
        this.router.navigateByUrl('worker/login');
      } else {
        this.router.navigateByUrl('worker/home');
      }
    });
  }
}
