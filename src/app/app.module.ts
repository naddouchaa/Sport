import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchsTableComponent } from './components/matchs-table/matchs-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchsComponent } from './components/matchs/matchs.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { MatchEditComponent } from './components/match-edit/match-edit.component';
import { EditPlayersComponent } from './components/edit-players/edit-players.component';
import { EditTeamsComponent } from './components/edit-teams/edit-teams.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import{HttpClientModule}from "@angular/common/http";
import { ProfileComponent } from './components/profile/profile.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    MatchsTableComponent,
    TeamsTableComponent,
    MatchsComponent,
    PlayersComponent,
    PlayerComponent,
    MatchInfoComponent,
    PlayerInfoComponent,
    TeamInfoComponent,
    PlayersTableComponent,
    MatchEditComponent,
    EditPlayersComponent,
    EditTeamsComponent,
    SearchMatchesComponent,
    AsterixPipe,
    ReversePipe,
    ProfileComponent,
    AddStadiumComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
