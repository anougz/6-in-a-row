import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './board-game/game-board';
import { CreateGameComponent } from './create-game/create-game.component';
import { HomeComponent } from './home-game/home.component';
import { ListGameComponent } from './list-game/list-game.component';
import { GameService } from './service-game/service-game';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    CreateGameComponent,
    HomeComponent,
    ListGameComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
