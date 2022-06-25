import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { PrismaService } from '../app/prisma.service';

@Module({
  exports: [ PlayersModule ],
  controllers: [PlayersController],
  providers: [PlayersService, PrismaService]
})
export class PlayersModule {}
