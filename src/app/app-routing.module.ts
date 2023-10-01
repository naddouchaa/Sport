import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchsComponent } from './components/matchs/matchs.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { MatchEditComponent } from './components/match-edit/match-edit.component';
import { EditPlayersComponent } from './components/edit-players/edit-players.component';
import { EditTeamsComponent } from './components/edit-teams/edit-teams.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signin", component: LoginComponent },
  { path: "subscription", component: SignupComponent },
  { path: "signupAdmin", component: SignupComponent },
  { path: "addmatch", component: AddMatchComponent },
  { path: "addplayer", component: AddPlayerComponent },
  { path: "addteam", component: AddTeamComponent },
  { path: "admin", component: AdminComponent },
  { path: "matches", component: MatchsComponent },
  { path: "players", component: PlayersComponent },
  //path>>>> path parametré
  {path:"matchInfo/:id",component:MatchInfoComponent},
  {path:"playerInfo/:id",component:PlayerInfoComponent},
  {path:"teamInfo/:id",component:TeamInfoComponent},
  {path:"matchEdit/:id",component:MatchEditComponent},
  {path:"editPlayer/:id",component:EditPlayersComponent},
  {path:"editTeam/:id",component:EditTeamsComponent},
  {path:"search",component:SearchMatchesComponent},
  {path:"profile", component:ProfileComponent},
  {path:"addStadium", component:AddStadiumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
