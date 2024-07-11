import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface EventData {
  idEvent: string;
  strEvent: string;
  strSport: string;
  strLeague: string;
  strSeason: string;
  strHomeTeam: string;
  strAwayTeam: string;
  intHomeScore: string;
  intAwayScore: string;
  strVenue: string;
  strCountry: string;
  strThumb: string;
  strStatus: string;
  strHomeTeamBadge: string;
  strAwayTeamBadge: string;
  dateEvent: string; 
  strTime: string;
  strProgress: string;
}

@Component({
  selector: 'app-live',
  templateUrl: './live.page.html',
  styleUrls: ['./live.page.scss'],
})
export class LivePage implements OnInit {
  live: EventData[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadlive();
  }

  loadlive() {
    this.http.get<{ events: EventData[] }>('https://www.thesportsdb.com/api/v2/json/3/livescore/all')
    .subscribe((data) => {
      console.log(data);
      if (data.events) {
        this.live = data.events;
      }
    });
  }
}