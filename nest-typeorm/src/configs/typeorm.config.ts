import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1111',
  database: 'board-app',
  entities: [__dirname + '/../**/*.enttiy.{js,ts}'],
  synchronize: true,
};
