import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  matches: any[] = [];
  currentGameweek: number = 1;
  gameweeks: number[] = Array.from({ length: 38 }, (_, i) => i + 1);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMatches(this.currentGameweek);
  }

  getMatches(gameweek: number) {
    const url = `https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=${gameweek}&s=2024-2025`;
    this.http.get(url).subscribe((data: any) => {
      this.matches = data.events;
    });
  }

  changeGameweek(gameweek: number) {
    this.currentGameweek = gameweek;
    this.getMatches(this.currentGameweek);
  }
}
