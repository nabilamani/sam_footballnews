import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  latestResult: any;
  upcoming: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadLatestResult();
    this.loadUpcoming();
  }

  loadLatestResult() {
    const apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=38&s=2023-2024';
    this.http.get<any>(apiUrl).subscribe(data => {
      if (data.events && data.events.length > 0) {
        this.latestResult = data.events[0];
      }
    });
  }

  loadUpcoming() {
    const apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=1&s=2024-2025';
    this.http.get<any>(apiUrl).subscribe(data => {
      if (data.events && data.events.length > 0) {
        this.upcoming = data.events[0];
      }
    });
  }
}
