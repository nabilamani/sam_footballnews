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
}

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  allResults: EventData[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAllResults();
  }

  loadAllResults() {
    this.http.get<{ events: EventData[] }>('https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4328&s=2023-2024')
    .subscribe((data) => {
      if (data.events) {
        this.allResults = data.events; 
      }
    });
  }
}
