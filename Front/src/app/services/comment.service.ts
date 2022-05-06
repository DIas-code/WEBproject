import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  BASE_URL = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  getCitataComments(citataId: number): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.BASE_URL}/citata/${citataId}/comments/`)
  }
  addComment(citataId: number, data: object): Observable<Comment>{
    return this.http.get<Comment>(`${this.BASE_URL}/citata/${citataId}/comments/`)
  }
}
