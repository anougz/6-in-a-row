import { Component, OnInit } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  rows = 10;
  cols = 10;
  board: number[][] = [];
  nextPlayer = 1;
  winner: number | null = null;

  ngOnInit() {
    this.initBoard();
  }

  initBoard() {
    this.board = Array.from({ length: this.rows },
      () => Array(this.cols).fill(0));
  }

  dropToken(col: number) {
    if (this.winner) return;
    for (let r = this.rows - 1; r >= 0; r--) {
      if (this.board[r][col] === 0) {
        this.board[r][col] = this.nextPlayer;
        this.nextPlayer = this.nextPlayer === 1 ? 2 : 1;
        return;
      }
    }
  }
}
