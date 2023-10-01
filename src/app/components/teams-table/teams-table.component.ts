import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab: any=[
    {id:1, name:"Est", owner:"Ali", stadium:"Rades",foundation:"1919"},
    {id:1, name:"Est", owner:"Ali", stadium:"Rades",foundation:"1919"},
    {id:1, name:"Est", owner:"Ali", stadium:"Rades",foundation:"1919"},
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToDisplay(id:number){

  
    this.router.navigate([`teamInfo/${id}`]);
 
  }

  goToEdit(id:number){
    // location.replace("")
  // this.router.navigate(["matchInfo/"+ id]);
  this.router.navigate([`editTeam/${id}`]);
}

}
