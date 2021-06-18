import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicservicesService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  checkemailexistservice(formdata: any) {
    return this.http.post(this.url + '/checkmail', formdata);
  }

  saveuserdata(formdata: any) {
    return this.http.post(this.url + '/vendordata', formdata);
  }

  getAllCategories() {
    return this.http.get(this.url + '/allcategories');
  }

  getAllSubCategories(categoryname: any) {
    return this.http.get(this.url + '/allsubcategories?categoryname=' + categoryname);
  }

  checksession() {
    return this.http.get(this.url + '/sessionche');
  }
  fetchentry() {
    return this.http.get(this.url + '/fetchent');
  }
}
