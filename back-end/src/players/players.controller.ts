import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Prisma } from '@prisma/client';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  create(@Body() data: Prisma.PlayerUncheckedCreateInput) {
    return this.playersService.create(data);
  }

  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne({id: +id});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.PlayerUpdateInput) {
    return this.playersService.update({id: +id}, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playersService.remove({id: +id});
  }
}
