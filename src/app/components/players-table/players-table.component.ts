import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  playersTab: any=[
    {id:1, name:"messi", nbr: "10",position:"atk"},
    {id:2, name:"ronaldo", nbr: "9",position:"atk"},
    {id:3, name:"salah", nbr: "7",position:"atk"},
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
goToDisplay(id:number){
  // location.replace("")
// this.router.navigate(["matchInfo/"+ id]);
this.router.navigate([`playerInfo/${id}`]);

}
goToEdit(id:number){
  // location.replace("")
// this.router.navigate(["matchInfo/"+ id]);
this.router.navigate([`editPlayer/${id}`]);

}
}
