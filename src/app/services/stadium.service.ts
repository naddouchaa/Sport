import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
  stadiumUrl:string="http://localhost:3000/api/stadiums";
  constructor(private http:HttpClient) { }
addStadium(stadium){
  return this.http.post<{ msg:string }>(this.stadiumUrl, stadium);

  
}
getAllStadium(){
  return this.http.get(this.stadiumUrl);
}
}
