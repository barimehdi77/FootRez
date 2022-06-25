import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ValidRequestMiddleware, ValidUnReserveMiddleware } from '../comman/middleware/ValidRequest.widdleware';
import { PlayersModule } from '../players/players.module';
import { RegisterModule } from '../register/register.module';
import { TeamsModule } from '../teams/teams.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ TeamsModule, RegisterModule, PlayersModule ],
  controllers: [ AppController ],
  providers: [ AppService ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidRequestMiddleware).forRoutes({
      path: '/',
      method: RequestMethod.PUT
    });
    consumer.apply(ValidUnReserveMiddleware).forRoutes({
      path: '/',
      method: RequestMethod.DELETE
    });
  }
}
