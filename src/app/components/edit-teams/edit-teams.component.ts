import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-teams',
  templateUrl: './edit-teams.component.html',
  styleUrls: ['./edit-teams.component.css']
})
export class EditTeamsComponent implements OnInit {
  teamsTab: any=[
    {id:1, name:"Est", owner:"Ali", stadium:"Rades",foundation:"1919"},
    {id:1, name:"Est", owner:"Ali", stadium:"Rades",foundation:"1919"},
    {id:1, name:"Est", owner:"Ali", stadium:"Rades",foundation:"1919"},
  ]
  teamToEdit:any;
  // obj
  team: any={};
// form obj
teamForm: FormGroup;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id=this.activatedRoute.snapshot.paramMap.get("id")
    for (let i = 0; i < this.teamsTab.length; i++) {
    if (this.teamsTab[i].id==id) {
      this.teamToEdit=this.teamsTab[i];
      break;
    }
    
   }
  console.log("here finded match", this.teamToEdit);
  }

}
