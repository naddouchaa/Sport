import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
teamUrl:string="http://localhost:3000/api/teams";
  constructor(private http:HttpClient) { }
addTeam(team){
  return this.http.post<{msg:string}>(this.teamUrl,team);
}
getAllTeams(){
  return this.http.get<{teams:any}>(this.teamUrl);
}
}
