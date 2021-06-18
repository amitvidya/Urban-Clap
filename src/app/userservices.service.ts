import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {
  }

  fetchentry() {
    return this.http.get(this.url + '/fetchent');
  }

  workdat(data: any) {
    return this.http.get(this.url + '/workdata?name=' + data);
  }
  userchecksession() {
    return this.http.get(this.url + '/checksession');
  }
  usersign(formdata: any) {
    return this.http.post(this.url + '/usersignup', formdata);
  }

  userlogin(formdata: any) {
    return this.http.post(this.url + '/userlogin', formdata);
  }

  checkemailexistservice(email: any) {
    return this.http.get(this.url + '/ckeckmail?email=' + email);
  }

  bookdat(formdata: any) {
    return this.http.post(this.url + '/bookda', formdata);
  }

  getprevbook() {
    return this.http.get(this.url + '/pevbook');
  }

  getprevbook2() {
    return this.http.get(this.url + '/pevbook2');
  }

  saverate(formdata: any) {
    return this.http.post(this.url + '/saverat', formdata);
  }

  statuschange(data: any) {
    return this.http.patch(this.url + '/statchan', data);
  }

  finaldat(data: any) {
    return this.http.get(this.url + '/finaldat?id=' + data);
  }

  logoutuse() {
    return this.http.get(this.url + '/logout');
  }
}
