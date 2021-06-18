import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  url = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) {
  }

  admin1login(formdata: any) {
    return this.http.post(this.url + '/loginaction', formdata);
  }

  adminchangepassword(formdata: any) {
    return this.http.patch(this.url + '/adminchangepassword', formdata);
  }

  adminchecksession() {
    return this.http.get(this.url + '/checksession');
  }

  adminlogout() {
    return this.http.get(this.url + '/adminlogout');
  }

  getentrydata() {
    return this.http.get(this.url + '/getentry');
  }

  fetchpendingdata() {
    return this.http.get(this.url + '/pendata');
  }

  updatedata(formdata: any) {
    return this.http.patch(this.url + '/updat', formdata);
  }

  getcategory(formdata: any) {
    return this.http.post(this.url + '/categorydat', formdata);
  }

  fetchcategory() {
    return this.http.get(this.url + '/fetchcate');
  }

  fetchsubcat() {
    return this.http.get(this.url + '/getsubcat');
  }

  deletecateory(data: any) {
    return this.http.post(this.url + '/deletcate', data);
  }

  getAllCategories() {
    return this.http.get(this.url + '/allcategories');
  }

  deletesubcat(data: any) {
    return this.http.post(this.url + '/deletsubcat', data);
  }

  getsubcategories(formdata: any) {
    return this.http.post(this.url + '/insertsubcat', formdata);
  }
}
