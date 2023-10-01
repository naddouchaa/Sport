import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user;
  constructor() { }


  ngOnInit() {

  }
  decodeToken(token: string):any {
    return jwt_decode(token);
    }
  isLoggedIn(){
    const jwt = sessionStorage.getItem("token");
    if (jwt) {
      this.user=this.decodeToken(jwt);
   
    }
     return !!jwt;
    }
}
