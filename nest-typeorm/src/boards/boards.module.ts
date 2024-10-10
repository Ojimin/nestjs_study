import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Board])], //entity
  controllers: [BoardsController],
  providers: [BoardsService, BoardRepository],
})
export class BoardsModule {}
