import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; //다른 컨포넌트에서 수정할 수도 있기에.
  constructor(private readonly boardRepository: BoardRepository) {}
  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto; //구조 분해 할당 문법
    const board: Board = {
      id: uuid,
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board); // 게시물 넣기
    return board;
  }

  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  deleteBoard(id: string): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== found.id); //id가 다른것만 남겨둘것
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id); //특정 id에 해당하는 board 조회
    board.status = status;
    return board;
  }
}
