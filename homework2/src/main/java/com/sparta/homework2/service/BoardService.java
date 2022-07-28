package com.sparta.homework2.service;

import com.sparta.homework2.domain.Board;
import com.sparta.homework2.dto.BoardDeleteRequestDto;
import com.sparta.homework2.dto.BoardUpdateRequestDto;
import com.sparta.homework2.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class BoardService {

    private final BoardRepository boardRepository;

    @Transactional
    public boolean update(Long id, BoardUpdateRequestDto requestDto) {
        Board board = boardRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("아이디가 존재하지 않습니다.")
        );
        if(board.getPassword().equals(requestDto.getPassword1())){
            board.update(requestDto);
            return true;
        }
        return false;
    }

    @Transactional
    public boolean delete(Long id, BoardDeleteRequestDto requestDto) {
        Board board = boardRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("아이디가 존재하지 않습니다.")
        );
        if(board.getPassword().equals(requestDto.getPassword())){
            boardRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
