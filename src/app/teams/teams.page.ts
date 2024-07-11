import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface EventData {
  idTeam: string;
  strTeam: string;
  strTeamShort: string;
  strBadge: string;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teams: EventData[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadteams();
  }

  loadteams() {
    this.http.get<{ teams: EventData[] }>('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League')
      .subscribe((data) => {
        console.log(data)
        if (data.teams) {
          this.teams = data.teams; 
        }
      });
  }
}