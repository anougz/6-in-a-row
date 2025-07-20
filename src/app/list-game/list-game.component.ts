import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../app.config';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html'
})
export class ListGameComponent implements OnInit {
  games: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(`${environment.apiUrl}/games`)
      .subscribe({
        next: (data) => this.games = data,
        error: (err) => console.error('Erreur lors du chargement des parties', err)
      });
  }
}
