import {Component, OnInit} from '@angular/core';
import {WorkerservicesService} from '../workerservices.service';
import {Router} from '@angular/router';
import {PublicservicesService} from '../publicservices.service';

@Component({
  selector: 'app-all-home',
  templateUrl: './all-home.component.html',
  styleUrls: ['./all-home.component.css']
})
export class AllHomeComponent implements OnInit {

  constructor(private publicservice: PublicservicesService, private router: Router) {
  }

  fetdata: any = [];

  ngOnInit(): void {
    this.publicservice.fetchentry().subscribe((res) => {
      this.fetdata = res;
      console.log(this.fetdata);
    });
  }

}
