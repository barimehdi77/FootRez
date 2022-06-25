import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../app/prisma.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {

  constructor (private prisma: PrismaService) {};

  create(data: Prisma.PlayerCreateInput) {
    return this.prisma.player.create({
      data,
    });
  }

  findAll() {
    return this.prisma.player.findMany({
      select: {
        name: true,
        age: true,
        Team: {
          select: {
            name: true,
          }
        }
      }
    });
  }

  findOne(where: Prisma.PlayerWhereUniqueInput) {
    return this.prisma.player.findUnique({
      where,
      select: {
        name: true,
        age: true,
        Team: {
          select: {
            name: true,
          }
        }
      }
    });
  }

  update(where: Prisma.PlayerWhereUniqueInput, data: Prisma.PlayerUpdateInput) {
    return this.prisma.player.update({
      where,
      data,
    });
  }

  remove(where: Prisma.PlayerWhereUniqueInput) {
    return this.prisma.player.delete({
      where,
    });
  }
}
