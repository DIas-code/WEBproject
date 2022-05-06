import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  BASE_URL = 'http://127.0.0.1:8000/api'
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URL}/category/`);
  }

  getCategory(id: number): Observable<Category>{
    return this.http.get<Category>(`${this.BASE_URL}/category/${id}/`)
  }
  getCategore(id: number): Observable<Category>{
    return this.http.get<Category>(`${this.BASE_URL}/category/${id}/citatas/`)
  }
}
