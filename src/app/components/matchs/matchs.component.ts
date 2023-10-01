import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {
  matchesTab :any=[
    
  ];


  constructor() { }

  ngOnInit() {
    this.matchesTab=JSON.parse(localStorage.getItem("matches")|| "[]");
  }
  // mise a jours matchesTab
updateMatches(T:any){
this.matchesTab=T;
}
}
