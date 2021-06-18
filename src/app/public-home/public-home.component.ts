import {Component, OnInit} from '@angular/core';
import {AdminserviceService} from '../adminservice.service';
import {Router} from '@angular/router';
import {PublicservicesService} from '../publicservices.service';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.css']
})
export class PublicHomeComponent implements OnInit {
  ServerResponse = '';
  photo: any = null;
  emailresponse = '';
  passwordmatch = true;
  categories: any = [];
  subcategories: any = [];
  check = true;
  check2 = true;

  constructor(private publicservice: PublicservicesService, private router: Router) {
  }

  ngOnInit(): void {
    this.publicservice.getAllCategories().subscribe((res: any) => {
      this.categories = res;
    });

  }

  getSubcategory(categoryname: any) {
    this.publicservice.getAllSubCategories(categoryname).subscribe((res: any) => {
      this.subcategories = res;
    });
  }

  checkemailexist(emailctrl: any) {
    const formdata = new FormData();
    formdata.append('email', emailctrl.value);
    this.emailresponse = '';
    this.check = true;
    this.publicservice.checkemailexistservice(formdata).subscribe((res: any) => {
      if (res.message === 'yes') {
        this.emailresponse = emailctrl.value + ' is already exist';
        this.check = false;
      }

    });
  }
  getfile(event: any) {
    console.log(event.target.files[0]);
    this.photo = event.target.files[0];
  }

  checkpassword(password: any, confirmpassword: any) {
    this.passwordmatch = true;
    this.check2 = true;
    if (password.value !== confirmpassword.value) {
      this.passwordmatch = false;
      this.check2 = false;
    }
  }
checkse(){
  this.publicservice.checksession().subscribe((res: any) => {
    if (res.message === 'no') {
      this.router.navigateByUrl('worker/login');
    }else{
      this.router.navigateByUrl('worker/home');
    }
  });
}

  saveuserdata(formdatatext: any) {
    console.log(formdatatext);
    const formdata = new FormData();
    formdata.append('photo', this.photo);
    for (let a in formdatatext) {
      formdata.append(a, formdatatext[a]);
    }
    this.publicservice.saveuserdata(formdata).subscribe((res: any) => {
      console.log(res.message);
    });
  }
}
