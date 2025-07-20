import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService, Game } from '../service-game/service-game';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.html',
  styleUrls: ['./game-board.css']
})
export class GameBoardComponent implements OnInit {
  get game(): Game {
    return this.game;
  }

  set game(value: Game) {
    this.game = value;
  }

  private _game: Game = {
    id: '',
    board: [[], [], []],
    currentPlayer: 1,
    winner: null
  };

  selections: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadGame(id!);
  }

  loadGame(id: string) {
    this.gameService.getGame(id).subscribe(g => this._game = g);
  }

  selectColumn(col: number) {
    if (this._game.winner) return;
    const idx = this.selections.indexOf(col);
    if (idx > -1) {
      this.selections.splice(idx, 1);
    } else if (this.selections.length < 3) {
      this.selections.push(col);
    }
  }

  play() {
    this.gameService
      .playMove(this._game.id, this._game.currentPlayer, this.selections)
      .subscribe(g => {
        this._game = g;
        this.selections = [];
      });
  }
}
