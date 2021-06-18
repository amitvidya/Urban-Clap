import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {AdminChangePasswordComponent} from './admin-change-password/admin-change-password.component';
import {AdimnHomeComponent} from './adimn-home/adimn-home.component';
import {PublicHomeComponent} from './public-home/public-home.component';
import {ViewpendingserproComponent} from './viewpendingserpro/viewpendingserpro.component';
import {WorkerloginComponent} from './workerlogin/workerlogin.component';
import {AllHomeComponent} from './all-home/all-home.component';
import {WorkerHomeComponent} from './worker-home/worker-home.component';
import {ManageCategoriesComponent} from './manage-categories/manage-categories.component';
import {ManageSubcategoriesComponent} from './manage-subcategories/manage-subcategories.component';
import {ManageServicesComponent} from './manage-services/manage-services.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {UserLoginComponent} from './user-login/user-login.component';

const routes: Routes = [
  {path: '', component: AllHomeComponent},
  {
    path: 'admin',
    children: [
      {path: 'login', component: AdminloginComponent},
      {path: 'changepassword', component: AdminChangePasswordComponent},
      {path: 'home', component: AdimnHomeComponent},
      {path: 'pend', component: ViewpendingserproComponent},
      {path: 'category', component: ManageCategoriesComponent},
      {path: 'subcategory', component: ManageSubcategoriesComponent}
    ]
  },
  {
    path: 'worker',
    children: [
      {path: 'login', component: WorkerloginComponent},
      {path: 'signup', component: PublicHomeComponent},
      {path: 'home', component: WorkerHomeComponent},
      {path: 'servi', component: ManageServicesComponent}
    ]
  },
  {
    path: 'user',
    children: [
      {path: 'home', component: UserHomeComponent},
      {path: 'signup', component: UserSignupComponent},
      {path: 'login', component: UserLoginComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
