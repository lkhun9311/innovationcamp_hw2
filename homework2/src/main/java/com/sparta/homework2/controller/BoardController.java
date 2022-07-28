package com.sparta.homework2.controller;

import com.sparta.homework2.domain.Board;
import com.sparta.homework2.dto.BoardDeleteRequestDto;
import com.sparta.homework2.dto.BoardUpdateRequestDto;
import com.sparta.homework2.repository.BoardRepository;
import com.sparta.homework2.dto.BoardRequestDto;
import com.sparta.homework2.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class BoardController {

    private final BoardRepository boardRepository;
    private final BoardService boardService;

    @PostMapping("/blog/boards")
    public Board createBoard(@RequestBody BoardRequestDto requestDto) {
        Board board = new Board(requestDto);
        return boardRepository.save(board);
    }

    @GetMapping("/blog/boards")
    public List<Board> getBoards() {
        return boardRepository.findAllByOrderByModifiedAtDesc();
    }

    @PutMapping("/blog/boards/{id}")
    public boolean updateBoard(@PathVariable Long id, @RequestBody BoardUpdateRequestDto requestDto){
        return boardService.update(id, requestDto);
    }

    @DeleteMapping("/blog/boards/{id}")
    public boolean deleteBoard(@PathVariable Long id, @RequestBody BoardDeleteRequestDto requestDto) {
        return boardService.delete(id, requestDto);
    }
}