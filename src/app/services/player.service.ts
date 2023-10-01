import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL: string = "http://localhost:3000/api/players";
  constructor(private httpClient: HttpClient) { }
  addPlayer(newPlayer, img: File) {
    let formData = new FormData();
    // comment remplir le formData
    formData.append("name", newPlayer.name);
    formData.append("position", newPlayer.position);
    formData.append("nbr", newPlayer.nbr);
    formData.append("tId", newPlayer.tId);
    formData.append("img", img);
    return this.httpClient.post<{ msg: string }>(this.playerURL, formData);

  }
  getPlayerById(id) {
    return this.httpClient.post(this.playerURL, id);
  }
  deletePlayerById(id) {
    return this.httpClient.delete(`${this.playerURL}/${id}`);
  }
  displayAllPlayers() {
    return this.httpClient.get(this.playerURL);
  }
  editPlayers(newPlayer) {
    // boolean,string

    return this.httpClient.put(this.playerURL, newPlayer);

  }

}
