import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CategoryComponent} from "./category/category.component";
import {CitataComponent} from "./citata/citata.component";
import {CitataDetailComponent} from "./citata-detail/citata-detail.component";
import {CitatacategoryComponent} from "./citatacategory/citatacategory.component";

import { CommentsComponent } from './comments/comments.component';
import {CategoryDetailComponent} from "./category-detail/category-detail.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'category', component:CategoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'citata', component: CitataComponent},
  {path: 'citata/:id', component:CitataDetailComponent},
  {path: 'category/:id', component: CategoryDetailComponent},
  {path: 'comment', component: CommentsComponent},
  {path: 'cat/:id', component: CitatacategoryComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
