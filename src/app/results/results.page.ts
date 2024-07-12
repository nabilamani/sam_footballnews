import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  allResults: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAllResults();
  }

  loadAllResults() {
    const apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=38&s=2023-2024';
    this.http.get<any>(apiUrl).subscribe(data => {
      this.allResults = data.events;
    });
  }
}