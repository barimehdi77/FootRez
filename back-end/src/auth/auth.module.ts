import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { FortyTwoStrategy } from './auth.strategies';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/app/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, FortyTwoStrategy, UserService, PrismaService],
})
export class AuthModule {}
