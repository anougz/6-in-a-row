import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-game/home.component';
import { GameBoardComponent } from './board-game/game-board';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game/:id', component: GameBoardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
