import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {
  searchForm:FormGroup;
  matchsTab :any=[];
  newMatchTab:any= [];
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.searchForm= this.formBuilder.group({
      
      scoreOne:["",[Validators.required]],
      scoreTwo:["",[Validators.required]],   
      });
      this.matchsTab=JSON.parse(localStorage.getItem("matches"||"[]"));
    }
  
  search(){
    this.newMatchTab=[];
   let T= this.searchForm.value
    // for (let i = 0; i <this.matchsTab.length; i++) {
    //   if (this.matchsTab[i].scoreOne==T.scoreOne && this.matchsTab[i].scoreTwo==T.scoreTwo ) {
    //     this.newMatchTab.push (this.matchsTab[i]);
           
    //   }
      
      
    // }
  
  
  this.newMatchTab=this.matchsTab.filter((elt)=>{

    return(elt.scoreOne==T.scoreOne && elt.scoreTwo==T.scoreTwo)
  });
}   
}




