import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/app/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor( private prisma: PrismaService) { }

  create(data: Prisma.UserUncheckedCreateInput) {
    return (this.prisma.user.create({
      data,
    }))
  }

  findAll() {
    return (this.prisma.user.findMany({
      select: {
        FirstName: true,
        LastName: true,
        UserName: true,
        Email: true,
      }
    }));
  }

  findOne(where: Prisma.UserWhereUniqueInput) {
    return (this.prisma.user.findUnique({
      where,
      select: {
        FirstName: true,
        LastName: true,
        UserName: true,
        Email: true,
      }
    }));
  }

  update(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput) {
    return (this.prisma.user.update({
      where,
      data,
    }));
  }

  remove(where: Prisma.UserWhereUniqueInput) {
    return (this.prisma.user.delete({
      where,
    }));
  }
}
