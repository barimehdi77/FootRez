import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { FortyTwoAuthGuard } from './auth.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @UseGuards(FortyTwoAuthGuard)
  login() {
    return ;
  }

  @Get('redirect')
  @UseGuards(FortyTwoAuthGuard)
  redirect(@Req() req: any ,@Res() res: Response) {
    // console.log(req);
    res.send(200);
  }

  @Get('status')
  status() {

  }
}
