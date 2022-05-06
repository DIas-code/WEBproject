import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = '';
  firstName = ''
  lastName = '';
  email = '';
  password = '';
  constructor(private userService: UserService,
              private route:Router,) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if (token){
      this.route.navigate(['/home'])
    }
  }
  register(){
    if (this.email ==='' && this.username==='' && this.password===''){
      window.alert('Fill username, password and email');
    }
    this.userService.register(this.username, this.firstName, this.lastName,
      this.password, this.email ).subscribe(data => {
      localStorage.setItem('token', data.token);
      this.username = '',
      this.firstName = '',
      this.lastName = '',
      this.password = '',
      this.email = '';
      location.reload();
    }, error => window.alert('Invalid username, password or email'))
  }
}
