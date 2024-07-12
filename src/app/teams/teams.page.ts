import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teams: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadteams();
  }

  loadteams() {
    const apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League';
    this.http.get<any>(apiUrl).subscribe(data => {
      this.teams = data.teams;
    });
  }
}