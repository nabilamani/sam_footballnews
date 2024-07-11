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
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  latestResult: EventData | null = null;
  upcoming: EventData | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadLatestResult();
    this.loadUpcoming();
  }

  loadLatestResult() {
    this.http.get<{ events: EventData[] }>('https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=38&s=2023-2024')
      .subscribe((data) => {
        if (data.events && data.events.length > 0) {
          this.latestResult = data.events[0];
        }
      });
  }

  loadUpcoming() {
    this.http.get<{ events: EventData[] }>('https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=1&s=2024-2025')
      .subscribe((data) => {
        if (data.events && data.events.length > 0) {
          this.upcoming = data.events[0];  // Perbaikan di sini
        }
      });
  }
}
