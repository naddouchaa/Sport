import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchs-table',
  templateUrl: './matchs-table.component.html',
  styleUrls: ['./matchs-table.component.css']
})
export class MatchsTableComponent implements OnInit {
  matchsTab :any=[
   
  ];
  constructor(private router:Router, private matchService:MatchService) { }

  ngOnInit() {
    // this.matchsTab=JSON.parse(localStorage.getItem("matches"||"[]"));
    this.matchService.displayAllMatches().subscribe((response)=>{
      console.log("here response all matches from BE",response);
      this.matchsTab=response.matches;
    })
  }
goToDisplay(id:number){

// location.replace("")
// this.router.navigate(["matchInfo/"+ id]);
this.router.navigate([`matchInfo/${id}`]);
}
goToEdit(id:number){

  // location.replace("")
  // this.router.navigate(["matchInfo/"+ id]);
  this.router.navigate([`matchEdit/${id}`]);
  }
  deleteMatch(x:number){
for (let i = 0; i < this.matchsTab.length; i++) {
 if (this.matchsTab[i].id==x) {
  this.matchsTab.splice(i,1);
  break;
 } 
  
}
localStorage.setItem("matches",JSON.stringify(this.matchsTab));
  }
}
