import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { FortyTwoAuthGuard } from './auth.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * GET /api/auth/login
   * This is the route the user will visit to authenticate
   */
  @Get('login')
  @UseGuards(FortyTwoAuthGuard)
  login() {
    return ;
  }

  /**
   * GET /api/auth/redirect
   * This is the redirect URL the OAuth2 Provider will call.
   */

  @Get('redirect')
  @UseGuards(FortyTwoAuthGuard)
  redirect(@Req() req: any ,@Res() res: Response) {
    // console.log(req);
    res.send(200);
  }

  /**
   * GET /api/auth/status
   * This will Retrieve the auth status
   */
  @Get('status')
  status() {

  }

  /**
   * GET /api/auth/logout
   * This will logging the user out
   */
  @Get('logout')
  logout() {}
}
