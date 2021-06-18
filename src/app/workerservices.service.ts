import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkerservicesService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  worklogin(formdata: any) {
    return this.http.post(this.url + '/worklogin', formdata);
  }

  getdatawork() {
    return this.http.get(this.url + '/getdatawork');
  }

  updatedata(formdata: any) {
    return this.http.patch(this.url + '/updata', formdata);
  }

  logout() {
    return this.http.get(this.url + '/logo');
  }

  checksession() {
    return this.http.get(this.url + '/sessionche');
  }

  getcategory(formdata: any) {
    return this.http.post(this.url + '/inservice', formdata);
  }

  fetchcategory() {
    return this.http.get(this.url + '/fetser');
  }

  deletecateory(formdata: any) {
    return this.http.post(this.url + '/delserv', formdata);
  }

  getpiad() {
    return this.http.get(this.url + '/getpaid');
  }

  statuschange(data: any) {
    return this.http.patch(this.url + '/statchan', data);
  }

  getprevbook() {
    return this.http.get(this.url + '/pevbook');
  }
}
