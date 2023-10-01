import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // matchURL adresee du serveur backend
  matchURL: string = "http://localhost:3000/api/matches";
  // httpClient:boustagi
  constructor(private httpClient: HttpClient) { }

  displayAllMatches() {
    return this.httpClient.get<{matches: any}>(this.matchURL);
  }
  // object
  displayMatchById(id) {
    // return this.httpClient.get(this.matchURL+"/"+ id);
    return this.httpClient.get<{match: any}>(`${this.matchURL}/${id}`);
  }
  // type de retour boolean
  deleteMatch(id) {
    return this.httpClient.delete(`${this.matchURL}/${id}`);

  }
  addMatch(matchObj) {
    // boolean,string
    return this.httpClient.post<{ msg: string }>(this.matchURL, matchObj);

  }

  editMatch(newMatch) {
    // boolean,string

    return this.httpClient.put(this.matchURL, newMatch);

  }
}
