import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  logged=false;
  constructor(private userService: UserService,
              private route: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if (token){
      this.route.navigate(['/home'])
    }
  }


  login(){
    if (this.username==='' && this.password===''){
      window.alert('Fill username and password')
    }
    this.userService.login(this.username, this.password).subscribe( data =>{
      localStorage.setItem('token', data.token);
      this.username = '';
      this.password = '';
      this.logged = true
      location.reload()

    }, error => {
      window.alert('Invalid username or password')
    })
  }
}
