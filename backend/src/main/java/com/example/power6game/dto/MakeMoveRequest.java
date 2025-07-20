package com.example.power6game.dto;

import lombok.Data;

@Data
public class MakeMoveRequest {
    private String password;
    private int column;

    public String getPassword() {
        return null;
    }

    public int getColumn() {
        return 0;
    }
}
