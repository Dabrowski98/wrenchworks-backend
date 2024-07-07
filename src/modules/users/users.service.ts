import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { comparePasswords, hashPassword } from '../../common/bcrypt';
import '../../common/softdeletion';
import '../../common/bcrypt';
import { isSoftDeleted } from '../../common/softdeletion';
import { ChangePasswordDto } from './DTOs/change-password-dto';
import { LinkUserToPersonDto } from './DTOs/link-user-to-person.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    if (!createUserDto.password) {
      throw new BadRequestException('Password is required');
    }
    const hashedPassword = hashPassword(createUserDto.password);

    return this.databaseService.user.create({
      data: { ...createUserDto, password: hashedPassword },
    });
  }

  async findAll() {
    const users = this.databaseService.user.findMany({
      where: { deletedAt: null },
    });

    if (!users) {
      throw new NotFoundException(`No users found`);
    }

    return users;
  }

  async findOne(userId: number) {
    const user = await this.databaseService.user.findUnique({
      where: {
        userId,
        deletedAt: null,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }

    return user;
  }

  async update(userId: number, updateUserDto: Prisma.UserUpdateInput) {
    await this.findOne(userId);
    return this.databaseService.user.update({
      where: {
        userId,
      },
      data: updateUserDto,
    });
  }

  async verifyEmail(userId: number) {
    await this.findOne(userId);
    return this.databaseService.user.update({
      where: { userId, deletedAt: null },
      data: { isVerified: true },
    });
  }

  async changePassword(userId: any, changePasswordDto: ChangePasswordDto) {
    const { currentPassword, newPassword } = changePasswordDto;

    const user = await this.findOne(userId);

    const isPasswordValid = await comparePasswords(
      currentPassword,
      user.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestException('Current password is incorrect');
    }

    const newHashedPassword = await hashPassword(newPassword);

    await this.databaseService.user.update({
      where: { userId },
      data: { password: newHashedPassword },
    });
  }

  async suspendUser(userId: number) {
    await this.findOne(userId);
    return this.databaseService.user.update({
      where: { userId, deletedAt: null },
      data: { status: 'suspended' },
    });
  }

  async activateUser(userId: number) {
    await this.findOne(userId);
    return this.databaseService.user.update({
      where: { userId, deletedAt: null },
      data: { status: 'active' },
    });
  }

  async linkUserToPerson(linkUserToPersonDto: LinkUserToPersonDto) {
    const { userId, personId } = linkUserToPersonDto;

    const user = await this.databaseService.user.findUnique({
      where: { userId },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${userId} does not exist`);
    }

    const person = await this.databaseService.person.findUnique({
      where: { personId },
    });

    if (!person) {
      throw new NotFoundException(`Person with id ${personId} does not exist`);
    }

    return await this.databaseService.user.update({
      where: { userId },
      data: { personId },
    });
  }

  async searchUsers(query: string, includeDeleted: boolean) {
    const where: Prisma.UserWhereInput = {
      OR: [{ username: { contains: query } }, { email: { contains: query } }],
    };

    if (!includeDeleted) {
      where.deletedAt = null;
    }

    return this.databaseService.user.findMany({ where });
  }

  async delete(userId: number) {
    await this.findOne(userId);
    return this.databaseService.user.update({
      where: {
        userId,
        deletedAt: null,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async destroy(userId: number) {
    await this.isDestroyable( { userId } );
    return this.databaseService.user.delete({ where: { userId } });
  }

  async retrieve(userId: number) {
    await this.isRetrievable({userId});

    return this.databaseService.user.update({
      data: { deletedAt: null },
      where: { userId },
    });
  }

  async isDestroyable(where: Record<string, any>) {
    await isSoftDeleted(where, "user", "delete");
  }

  async isRetrievable(where: Record<string, any>) {
    await isSoftDeleted(where, 'user', 'retrieve');
  }
}
