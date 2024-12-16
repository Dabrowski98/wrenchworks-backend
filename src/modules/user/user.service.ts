import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FindManyUserArgs, FindUniqueUserArgs, User, UserCreateInput, UserUpdateInput } from './dto';
import { Prisma } from '@prisma/client';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(input: UserCreateInput) {
    return this.prisma.user.create({ data: input });
  }
  
  async findUserById(userId: bigint, options?: {
    includeSessionData?: boolean
    includeWorkshops?: boolean
  }) {
    const user = await this.prisma.user.findUnique({
      where: { userId },
      include: {
        sessionData: options?.includeSessionData,
        workshops: options?.includeWorkshops,
      },
    });

    if (!user) throw new RecordNotFoundError(User);

    return user;
  }

  async findUserByEmail(email: string, options?: {
    includeSessionData?: boolean
    includeWorkshops?: boolean
  }) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        sessionData: options?.includeSessionData,
        workshops: options?.includeWorkshops,
      },
    });

    if (!user) throw new RecordNotFoundError(User);
``
    return user;
  }

  async findUsers(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args);
  }

  async findAllUsers() {
    return this.prisma.user.findMany({where: { userId: { not: undefined }}});
  }

  async updateUser(userId: bigint, data: UserUpdateInput) {
    return this.prisma.user.update({
      where: { userId },
      data,
    });
  }
}

