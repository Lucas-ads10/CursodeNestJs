import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
 
/* ele recebe dados do controller, e sua parte fica para acesso de banco de dados, 
aplica regras e retorna o resultado final, o response. */