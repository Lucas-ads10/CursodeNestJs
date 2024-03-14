import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
 /* Ele vai funcionar como um "garçom", ele atende o request. 

 Indentifica a rota e qual o metodo que ele esta solicitiando (get, delete.....).*/