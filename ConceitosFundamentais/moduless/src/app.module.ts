import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*Dentro de um Módulo, podemos encontrar diversos elementos:

O @Module()decorador pega um único objeto cujas propriedades descrevem o módulo;

providers: os provedores que serão instanciados pelo injetor Nest e que podem ser compartilhados pelo menos 
neste módulo;


controllers: o conjunto de controladores definidos neste módulo que devem ser instanciados;


imports: a lista de módulos importados que exportam os provedores exigidos neste módulo e


exports: o subconjunto providersdisso é fornecido por este módulo e deve estar disponível em outros módulos 
que importam este módulo. Você pode usar o próprio provedor ou apenas seu token ( providevalor).*/