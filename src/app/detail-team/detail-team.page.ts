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

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.teamShort = this.route.snapshot.paramMap.get('teamShort')!;
    this.getTeamDetails(this.teamShort);
  }
  
  getTeamDetails(teamShort: string) {
    console.log(teamShort);
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${teamShort}`;
    this.http.get(url).subscribe((data: any) => {
      this.team = data.teams[0]; // Asumsi API mengembalikan array dengan satu tim
    });
  }
}
