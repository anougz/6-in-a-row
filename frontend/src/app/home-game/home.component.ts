import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../service-game/service-game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  newGame() {
    this.gameService.createGame().subscribe(g => {
      this.router.navigate(['/game', g.id]);
    });
  }
}
