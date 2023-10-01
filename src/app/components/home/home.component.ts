import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  matchesTab :any=[
    {id:1, scoreOne:1, scoreTwo:4, teamOne:"Est", teamTwo:"Ca"},]
      
  constructor() { }

  ngOnInit() {
  }

}
