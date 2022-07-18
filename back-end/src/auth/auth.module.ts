import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { FortyTwoStrategy } from 'src/strategies/FortyTwo.strategy';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/app/prisma.service';
import { SessionSerializer } from './auth.serializer';

@Module({
  controllers: [AuthController],
  providers: [AuthService, FortyTwoStrategy, UserService, PrismaService, SessionSerializer],
})
export class AuthModule {}
