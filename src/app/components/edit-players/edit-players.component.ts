import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-players',
  templateUrl: './edit-players.component.html',
  styleUrls: ['./edit-players.component.css']
})
export class EditPlayersComponent implements OnInit {
  playersTab: any=[
    {id:1, name:"messi", nbr: "10",position:"atk"},
    {id:2, name:"ronaldo", nbr: "9",position:"atk"},
    {id:3, name:"salah", nbr: "7",position:"atk"},
  ];

  playerToEdit:any;
  // obj
  player: any={};
// form obj
matchForm: FormGroup;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id=this.activatedRoute.snapshot.paramMap.get("id")
    for (let i = 0; i < this.playersTab.length; i++) {
    if (this.playersTab[i].id==id) {
      this.playerToEdit=this.playersTab[i];
      break;
    }
    
   }
  console.log("here finded match", this.playerToEdit);
  }

}
