import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat); // cats 배열에 한개의 cat을 넣음
  }

  findAll(): Cat[] {
    return this.cats; // cats 배열 전체 return
  }
}
