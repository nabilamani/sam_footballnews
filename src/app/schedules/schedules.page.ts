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
  selector: 'app-schedules',
  templateUrl: './schedules.page.html',
  styleUrls: ['./schedules.page.scss'],
})
export class SchedulesPage implements OnInit {
  upcomingMatches: EventData[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadUpcomingMatches();
  }

  loadUpcomingMatches() {
    this.http.get<{ events: EventData[] }>('https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=1&s=2024-2025')
      .subscribe((data) => {
        if (data.events) {
          this.upcomingMatches = data.events; // Ambil data pertandingan mendatang
        }
      });
  }
}