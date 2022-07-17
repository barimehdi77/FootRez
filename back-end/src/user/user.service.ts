import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../app/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor( private readonly prisma: PrismaService) { }

  async validateUser(data: Prisma.UserUncheckedCreateInput) {
    // const { login } = data;
    const user = await this.prisma.user.findUnique({
      where: {
        intra_id: data.intra_id,
      }
    });
    if (user) return user;
    return this.create(data);
  }

  async FindUser(where: number): Promise<Prisma.UserUncheckedCreateInput | undefined> {
    return (this.findOne({intra_id: +where}));
  }

  create(data: Prisma.UserUncheckedCreateInput) {
    console.log("The Create function is called");
    return (this.prisma.user.create({
      data,
    }))
  }

  findAll() {
    return (this.prisma.user.findMany({
      select: {
        first_name: true,
        last_name: true,
        user_name: true,
        email: true,
        login: true,
        image_url: true,
      }
    }));
  }

  findOne(where: Prisma.UserWhereUniqueInput) {
    return (this.prisma.user.findUnique({
      where,
      select: {
        first_name: true,
        last_name: true,
        user_name: true,
        email: true,
        login: true,
        image_url: true,
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
