import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Nextfunction) [
        console.log('Reqeust...');
        next(); // 미들웨어 처리하고 나서 next를 항상 써줘야 함
    ]
}