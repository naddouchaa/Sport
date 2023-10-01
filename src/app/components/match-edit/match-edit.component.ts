import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-match-edit',
  templateUrl: './match-edit.component.html',
  styleUrls: ['./match-edit.component.css']
})
export class MatchEditComponent implements OnInit {
  matchsTab :any=[
    
  ];
  matchToEdit:any;
  matchsTabForEdit:any;
  id:any;
  // obj

// form obj
matchForm: FormGroup;
  constructor( private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
this.matchsTab=JSON.parse(localStorage.getItem("matches")|| "[]")
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    for (let i = 0; i < this.matchsTab.length; i++) {
    if (this.matchsTab[i].id==this.id) {
      this.matchToEdit=this.matchsTab[i];
      break;
    }
    
   }
  console.log("here finded match", this.matchToEdit);
  }
  editMatch(){
for (let i = 0; i < this.matchsTab.length; i++) {
  if (this.matchsTab[i].id==this.id) {
    this.matchsTab[i]=this.matchToEdit;
    break;
  }
  
}
localStorage.setItem("matches",JSON.stringify(this.matchsTab)) ;
// this.router.navigate(["admin"]);
}
}
