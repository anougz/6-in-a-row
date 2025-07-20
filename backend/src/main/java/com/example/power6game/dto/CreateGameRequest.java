package com.example.power6game.dto;

import lombok.Data;

@Data
public class CreateGameRequest {
    private String playerName;
    private int player1TimeSeconds;
    private int player2TimeSeconds;

    public int getPlayer2TimeSeconds() {
        return 0;
    }

    public int getPlayer1TimeSeconds() {
        return 0;
    }

    public String getPlayerName() {
        return null;
    }
}

