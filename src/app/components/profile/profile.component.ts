import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  id: any;
  findedUser: any;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({

      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
    });
    this.id = localStorage.getItem("connectedUser");
    console.log("here id :", this.id);

    this.userService.getUserById(this.id).subscribe((doc) => {
      this.findedUser = doc.user;
      console.log("here", this.findedUser);

    })
  }


  edit() {

    let obj = this.profileForm.value;
    obj._id = localStorage.getItem("connectedUser");
    this.userService.editProfile(obj).subscribe((msg) => {

      console.log("hhhhhhh", this.profileForm.value);

       if (msg.isUpdated) {
        console.log("hhhhh",msg.isUpdated);

        this.router.navigate([""]);
       }

    });

  }


}
