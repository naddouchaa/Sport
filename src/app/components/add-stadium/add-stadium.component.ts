import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StadiumServiceService } from 'src/app/services/stadium-service.service';


@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadiumForm:FormGroup;
  stadium:any={};
  constructor(private stService:StadiumServiceService) { }

  ngOnInit() {

  }
addStadium(){
  console.log("here object FE", this.stadium);
  
this.stService.addStadium(this.stadium).subscribe((response)=>{
  console.log("here response from BE:", response.msg);
});
}
}
