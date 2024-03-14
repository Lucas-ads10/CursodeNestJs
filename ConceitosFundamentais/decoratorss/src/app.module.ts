import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
O "@Mudule é um decorator"

-------------------------------------

O decorator constrói todos os metodos e atributos dentro da classe (AppModule).
-------------------------------------
Ele é uma função, em um objeto json. */