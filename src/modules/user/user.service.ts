import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FindUniqueUserArgs, User, UserCreateInput } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(input: UserCreateInput) {
    return this.prisma.user.create({ data: input });
  }
  
  async findUser(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args);
  }

}

