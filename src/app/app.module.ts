import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PublicHomeComponent } from './public-home/public-home.component';
import { AdimnHomeComponent } from './adimn-home/adimn-home.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { ViewpendingserproComponent } from './viewpendingserpro/viewpendingserpro.component';
import { WorkerloginComponent } from './workerlogin/workerlogin.component';
import { AllHomeComponent } from './all-home/all-home.component';
import { WorkerHomeComponent } from './worker-home/worker-home.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManageSubcategoriesComponent } from './manage-subcategories/manage-subcategories.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    PublicHomeComponent,
    AdimnHomeComponent,
    PublicHeaderComponent,
    AdminHeaderComponent,
    AdminChangePasswordComponent,
    PublicFooterComponent,
    ViewpendingserproComponent,
    WorkerloginComponent,
    AllHomeComponent,
    WorkerHomeComponent,
    ManageCategoriesComponent,
    ManageSubcategoriesComponent,
    ManageServicesComponent,
    UserHomeComponent,
    UserLoginComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
