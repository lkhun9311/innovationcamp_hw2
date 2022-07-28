package com.sparta.homework2.dto;

import lombok.Getter;

@Getter
public class BoardUpdateRequestDto {
    private String title;
    private String username;
    private String password1;
    private String password2;
    private String contents;
}
