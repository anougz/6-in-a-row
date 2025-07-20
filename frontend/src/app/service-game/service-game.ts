import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Game {
  id: string;
  board: number[][];
  currentPlayer: number;
  winner: number | null;
}

@Injectable({ providedIn: 'root' })
export class GameService {
  private api = '/games';

  constructor(private http: HttpClient) {}

  createGame(): Observable<Game> {
    return this.http.post<Game>(`${this.api}`, {});
  }

  getGame(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.api}/${id}`);
  }

  playMove(id: string, player: number, columns: number[]): Observable<Game> {
    return this.http.post<Game>(`${this.api}/${id}/move`, { player, columns });
  }
}
