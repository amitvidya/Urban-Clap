import {Component, ElementRef, NgZone, OnInit} from '@angular/core';
import {PublicservicesService} from '../publicservices.service';
import {Router} from '@angular/router';
import {UserservicesService} from '../userservices.service';
import {from} from 'rxjs';
import {ICustomWindow, RazorService} from '../razor.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  fetdata: any = [];
  fetdat: any = [];
  prev: any = [];
  prev1: any = [];
  fina: any = [];
  ServerResponse: any = '';
  id: any = '';
  timediff: any = '';
  pay: any = '';
  // price: any = '';
  starRating: any = '';
  serproid: any = '';
  Serverres: any = '';
  emailuse: any = '';
  // RAZORPAY
  URL = 'http://localhost:3000/users';
  private _window: ICustomWindow;
  public rzp: any;
  price = 0;
  formTextData: any = null;
  serid: any = '';
  public razorPayOptions: any = {
    key: 'rzp_test_A3RM3Asww6uWvF',
    amount: this.price,
    currency: 'INR',
    name: 'Urban Clap',
    description: 'Best Web Application',
    image: 'data:image/png;base64,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',
    handler: this.razorPayHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          // add current page routing here if payment fails
          this.router.onSameUrlNavigation;
        });
      })
    },
    prefill: {
      name: '',
      email: 'admin123@gmail.com',
      contact: '9855287678'
    }
  };

  constructor(
    private userservice: UserservicesService,
    private router: Router,
    private elementRef: ElementRef,
    private http: HttpClient,
    private razorparService: RazorService,
    private zone: NgZone,
  ) {
    this._window = this.razorparService.nativeWindow;
  }

  // saveuserdata2(formdatas: any) {
  //   this.timediff = this.diff(formdatas.timefrom, formdatas.timeto);
  // this.price = this.pay * this.timediff;
  // console.log(this.price);
  // const formdata = new FormData();
  // formdata.append('times', this.timediff);
  // formdata.append('ids', this.id);
  // formdata.append('pay', this.pay);
  // for (const a in formdatas) {
  //   formdata.append(a, formdatas[a]);
  // }
  // this.userservice.bookdat(formdata).subscribe((res: any) => {
  //   if (res.message === 'yes') {
  //     this.ServerResponse = 'booked';
  //   }
  // });
  // }

  // Initialize Razorpay
  saveuserdata(formdatas: any) {
    this.timediff = this.diff(formdatas.timefrom, formdatas.timeto);
    // console.log(this.timediff);
    this.price = this.pay * this.timediff;
    // console.log(this.price);

    this.formTextData = formdatas;
    this.razorPayOptions.amount = this.price * 100;

    this.formTextData.times = this.timediff;
    this.formTextData.ids = this.id;
    this.formTextData.pay = this.pay;


    // @ts-ignore
    this.rzp = new this.razorparService.nativeWindow.Razorpay(this.razorPayOptions);
    this.rzp.open();
  }

  // Razorpay Handler
  razorPayHandler(res: any) {
    // alert(res.razorpay_payment_id);
    this.zone.run(() => {
      // this.formTextData['paymentid'] = res.razorpay_payment_id;
      this.http.post(this.URL + '/bookda', this.formTextData).subscribe((res: any) => {
        console.log(res);
        if (res.message === 'yes') {
          this.ServerResponse = 'booked';
          this.ngOnInit();
        }
      });
    });
  }

  ngOnInit(): void {
    this.userservice.fetchentry().subscribe((res) => {
      this.fetdata = res;
      console.log(this.fetdata);
    });
    this.userservice.getprevbook().subscribe((res) => {
      this.prev = res;
      console.log(this.prev);
    });
    this.userservice.getprevbook2().subscribe((res) => {
      this.prev1 = res;
    });
    this.userservice.userchecksession().subscribe((res: any) => {
      if (res.message === 'no') {
        this.router.navigateByUrl('user/login');
      }
    });
  }

  getfile(data: any) {
    this.userservice.finaldat(data).subscribe((res) => {
      this.fina = res;
      console.log(this.fina);
    });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
  }

  selectid(data: any, da: any) {
    this.id = data;
    this.pay = da;
  }

  email(data: any, da: any, dat: any) {
    this.serproid = data;
    this.serid = dat;
    this.emailuse = da;
    console.log(this.emailuse);
  }

  logout() {
    this.userservice.logoutuse().subscribe((res) => {
    });
  }

  changesta() {
    let formdata = new FormData();
    formdata.append('id', this.serid);
    this.userservice.statuschange(formdata).subscribe((res: any) => {
      if (res.message === 'success') {
        this.ngOnInit();
      }
    });
  }

  ratedata(formdatatext: any) {
    const formdata = new FormData();
    console.log();
    formdata.append('rates', this.starRating);
    formdata.append('id', this.serproid);
    formdata.append('email', this.emailuse);
    for (let a in formdatatext) {
      formdata.append(a, formdatatext[a]);
    }
    this.userservice.saverate(formdata).subscribe((res: any) => {
      if (res.message === 'yes') {
        this.Serverres = 'Done';
      }
    });
  }

  diff(from: any, to: any) {
    const start = from.split(':');
    const end = to.split(':');
    const startdate = new Date(0, 0, 0, start[0], start[1], 0);
    const enddate = new Date(0, 0, 0, end[0], end[1], 0);
    let diff = enddate.getTime() - startdate.getTime();
    let hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(diff / 1000 / 60);
    if (hours < 0) {
      hours = hours + 24;
    }
    return (hours + '.' + (minutes <= 9 ? '0' : '') + minutes);
  }


  workerdata(data: any) {
    this.userservice.workdat(data).subscribe((res) => {
      this.fetdat = res;
      console.log(this.fetdat);
    });
  }
}
