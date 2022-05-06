import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category, Citata} from "../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitataService {
  BASE_URL = 'http://127.0.0.1:8000/api'
  constructor(private http: HttpClient) { }

  getCategoryCitata(categoryId: number): Observable<Citata[]>{
    return this.http.get<Citata[]>(`${this.BASE_URL}/category/${categoryId}/citatas/`)
  }
  getCategory(categoryId: number): Observable<Category>{
    return this.http.get<Category>(`${this.BASE_URL}/category/${categoryId}/citatas/`)
  }
  getCitata(id:number): Observable<Citata>{
    return this.http.get<Citata>(`${this.BASE_URL}/citata/${id}/`)
  }
  addCitata(data: object): Observable<Citata>{
    return this.http.post<Citata>(`${this.BASE_URL}/citata/`, data)
  }
  updateCitata(citata: Citata): Observable<Citata>{
    return this.http.put<Citata>(`${this.BASE_URL}/citata/`, citata)
  }
}
