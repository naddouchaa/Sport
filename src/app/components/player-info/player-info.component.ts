import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  playersTab: any=[
    {id:1,name:"messi", nbr: "10",position:"atk"},
    {id:2,name:"ronaldo", nbr: "9",position:"atk"},
    {id:3,name:"salah", nbr: "7",position:"atk"},
  ];
  findedPlayer:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id=this.activatedRoute.snapshot.paramMap.get("id")
  for (let i = 0; i < this.playersTab.length; i++) {
  if (this.playersTab[i].id==id) {
    this.findedPlayer=this.playersTab[i];
    break;
  }
  
 }
console.log("here finded player", this.findedPlayer);
  }

}
