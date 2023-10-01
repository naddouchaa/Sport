import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  teamsTab: any=[
    {id:1, name:"Est", owner:"Ali", stadium:"Rades",foundation:"1919"},
    {id:1, name:"Est", owner:"Ali", stadium:"Rades",foundation:"1919"},
    {id:1, name:"Est", owner:"Ali", stadium:"Rades",foundation:"1919"},
  ];
  findedTeam:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    let id=this.activatedRoute.snapshot.paramMap.get("id")
  for (let i = 0; i < this.teamsTab.length; i++) {
  if (this.teamsTab[i].id==id) {
    this.findedTeam=this.teamsTab[i];
    break;
  }
  
 }
console.log("here finded match", this.findedTeam);

  }

}
