import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  logged=false;
  constructor() { }

  ngOnInit(): void {
    this.isLogged()
  }
  isLogged() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true

    }
  }
  logout(){
    localStorage.removeItem('token');
    this.logged=false;
  }
}
