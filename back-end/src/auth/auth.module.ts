import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { FortyTwoStrategy } from 'src/strategies/FortyTwo.strategy';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/app/prisma.service';
import { SessionSerializer } from './auth.serializer';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({})
],
  controllers: [AuthController],
  providers: [AuthService, FortyTwoStrategy, UserService, PrismaService, SessionSerializer, ConfigService],
})
export class AuthModule {}
