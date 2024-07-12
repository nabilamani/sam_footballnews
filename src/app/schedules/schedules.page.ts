import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.page.html',
  styleUrls: ['./schedules.page.scss'],
})
export class SchedulesPage implements OnInit {
  upcomingMatches: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadUpcomingMatches();
  }

  loadUpcomingMatches() {
    const apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=1&s=2024-2025';
    this.http.get<any>(apiUrl).subscribe(data => {
      this.upcomingMatches = data.events;
    });
  }
}