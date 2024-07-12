import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.page.html',
  styleUrls: ['./detail-team.page.scss'],
})
export class DetailTeamPage implements OnInit {
  team: any;
  teamShort: string = '';
  lastMatches: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.teamShort = this.route.snapshot.paramMap.get('teamShort')!;
    this.getTeamDetails(this.teamShort);
  }
  
  getTeamDetails(teamShort: string) {
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${teamShort}`;
    this.http.get(url).subscribe((data: any) => {
      this.team = data.teams[0];
      if (this.team) {
        this.getLastMatches(this.team.idTeam);
      }
    });
  }

  getLastMatches(teamId: string) {
    console.log(this.teamShort);
    const url = `https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${teamId}`;
    this.http.get(url).subscribe((data: any) => {
      this.lastMatches = data.results;
    });
  }
}
