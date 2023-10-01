import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg: string;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required]],
    });
  }
  login() {
    console.log("here user", this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe((response) => {
      console.log("here response after login", response);
      if (response.token) {
        sessionStorage.setItem("token", response.token);
    let role:string= (this.decodeToken(response.token)).role;
    console.log("here user role:",role);
    
        if (role == "admin") {
          this.router.navigate(["admin"]);
        } else {
          this.router.navigate([""]);
          
          
        }
      } else {
        this.errorMsg = "Please chek Emai/pwd";
      }

    });
  }
  decodeToken(token: string):any {
    return jwt_decode(token);
    }
}
