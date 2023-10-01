import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  // matchesTab :any=[
  //   // {id:1, scoreOne:1, scoreTwo:4, teamOne:"Est", teamTwo:"Ca"},
  //   // {id:2, scoreOne:7, scoreTwo:5, teamOne:"CSS", teamTwo:"Ca"},
  //   // {id:3, scoreOne:2, scoreTwo:2, teamOne:"Ed", teamTwo:"Ca"},
  // ];
  findedMatch:any;
  constructor(private activatedRoute:ActivatedRoute, private matchService:MatchService) { }

  ngOnInit() {
//     this.matchesTab=
  let id =this.activatedRoute.snapshot.paramMap.get("id")
//   for (let i = 0; i < this.matchesTab.length; i++) {
//   if (this.matchesTab[i].id==id) {
//     this.findedMatch=this.matchesTab[i];
//     break;
//   }
  
//  }
// console.log("here finded match", this.findedMatch);
this.matchService.displayMatchById(id).subscribe((response)=>{
console.log("here response from BE",response);
this.findedMatch=response.match;
});
}

}
