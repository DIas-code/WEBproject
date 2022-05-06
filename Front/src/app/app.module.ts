import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeadComponent } from './head/head.component';
import { LoginComponent } from './login/login.component';
import { CitatacategoryComponent } from './citatacategory/citatacategory.component';
import { CitataComponent } from './citata/citata.component';
import { CategoryComponent } from './category/category.component';
import { CitataDetailComponent } from './citata-detail/citata-detail.component';
import { CommentsComponent } from './comments/comments.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./authinterceptor";
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CreatCitataComponent } from './creat-citata/creat-citata.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeadComponent,
    LoginComponent,
    CitatacategoryComponent,
    CitataComponent,
    CategoryComponent,
    CitataDetailComponent,
    CommentsComponent,
    CategoryDetailComponent,
    CreatCitataComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
