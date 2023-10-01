import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StadiumServiceService } from 'src/app/services/stadium-service.service';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
// obj
team: any={};
stadiums:any=[];
// form obj
teamForm: FormGroup;
teamId:any;
stadiumId:any;
  constructor(private teamService:TeamServiceService,private stadiumService:StadiumServiceService) { }

  ngOnInit() {
    this.stadiumService.getAllStadium().subscribe((response) => {
      this.stadiums = response.stadiums;
      this.stadiumId = this.stadiums[0]._id;
  });
}

  addTeam(){
    console.log("here team objet",this.team);
    this.teamService.addTeam(this.team).subscribe((response)=>{
      console.log("here response from be",response.msg);
      
    })
    
  }
  selectTeam(event) {
    console.log("here stadium id", event.target.value);
    this.stadiumId = event.target.value;

  }
}
