import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersTab: any=[
    {id:1, name:"messi", nbr: "10",position:"atk"},
    {id:2, name:"ronaldo", nbr: "9",position:"atk"},
    {id:3, name:"salah", nbr: "7",position:"atk"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
