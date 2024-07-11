import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  standings: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStandings();
  }

  getStandings() {
    const apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2024-2025';
    this.http.get<any>(apiUrl).subscribe(data => {
      this.standings = data.table;
    });
  }
}