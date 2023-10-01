import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  // obj
  player: any = {};
  teams: any = [];
  imagePreview: any;
  teamId: any;
  // form obj
  playerForm: FormGroup;
  constructor(private playerService: PlayerService, private tService: TeamServiceService) { }

  ngOnInit() {

    this.tService.getAllTeams().subscribe((response) => {
      this.teams = response.teams;
      this.teamId = this.teams[0]._id;
    });


  }

  addPlayer() {
    this.player.tId = this.teamId;
    console.log("here player objet", this.player);

    this.playerService.addPlayer(this.player, this.player.img).subscribe((response) => {
      console.log("here response from BE:", response.msg);
    });

  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log("fffffffff", file);

    // this.playerForm.patchValue({img: file });
    // this.playerForm.updateValueAndValidity();
    this.player.img = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
  selectTeam(event) {
    console.log("here team id", event.target.value);
    this.teamId = event.target.value;

  }
}
