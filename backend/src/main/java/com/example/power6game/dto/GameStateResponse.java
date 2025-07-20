package com.example.power6game.dto;

import lombok.Data;

@Data
public class GameStateResponse {
    private String gameId;
    private String player1Name;
    private String player2Name;
    private int currentPlayer;
    private int[][] board;
    private int player1RemainingTime;
    private int player2RemainingTime;
    private String status;
    private int currentMoveCount;
    private String winner;

    public void setGameId(String id) {

    }

    public void setPlayer1Name(String player1Name) {

    }

    public void setPlayer2Name(String player2Name) {

    }

    public void setCurrentPlayer(int currentPlayer) {

    }

    public void setBoard(int[][] board) {

    }

    public void setPlayer1RemainingTime(int player1RemainingTime) {

    }

    public void setPlayer2RemainingTime(int player2RemainingTime) {

    }

    public void setStatus(String string) {

    }

    public void setCurrentMoveCount(int currentMoveCount) {

    }

    public void setWinner(String player1Name) {

    }
}
