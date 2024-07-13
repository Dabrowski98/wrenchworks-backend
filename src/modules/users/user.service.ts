import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { comparePasswords, hashPassword } from 'src/common/helper/bcrypt';
import '../../common/helper/softdeletion';
import '../../common/helper/bcrypt';
import { isSoftDeleted } from '../../common/helper/softdeletion';
import { ChangePasswordInput, LinkUserToPersonInput } from './dto';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createUser(createUserDto: Prisma.UserCreateInput) {
    if (!createUserDto.username) {
      throw new BadRequestException('Username is required');
    }

    if (!createUserDto.password) {
      throw new BadRequestException('Password is required');
    }

    if (this.findUserByUsername) {
      throw new BadRequestException(
        'Username with that username already exists',
      );
    }

    const hashedPassword: string = hashPassword(createUserDto.password);

    return this.databaseService.user.create({
      data: { ...createUserDto, password: hashedPassword },
    });
  }

  async findUsers() {
    const users = this.databaseService.user.findMany({
      where: { deletedAt: null },
    });

    if (!users) {
      throw new NotFoundException(`No users found`);
    }

    return users;
  }

  async findUserById(id: bigint) {
    const user = await this.databaseService.user.findUnique({
      where: {
        userId: id,
        deletedAt: null,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async findUserByUsername(username: string) {
    const user = await this.databaseService.user.findUnique({
      where: {
        username: username,
        deletedAt: null,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with username: ${username} not found`);
    }

    return user;
  }

  async updateUser(id: bigint, updateUserDto: Prisma.UserUpdateInput) {
    await this.findUserById(id);
    return this.databaseService.user.update({
      where: {
        userId: id,
      },
      data: updateUserDto,
    });
  }

  async verifyEmail(id: bigint) {
    await this.findUserById(id);
    return this.databaseService.user.update({
      where: { userId: id, deletedAt: null },
      data: { isVerified: true },
    });
  }

  async changePassword(id: any, changePasswordInput: ChangePasswordInput) {
    const { currentPassword, newPassword } = changePasswordInput;

    const user = await this.findUserById(id);

    const isPasswordValid = await comparePasswords(
      currentPassword,
      user.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestException('Current password is incorrect');
    }

    const newHashedPassword = await hashPassword(newPassword);

    await this.databaseService.user.update({
      where: { userId: id },
      data: { password: newHashedPassword },
    });
  }

  async suspendUser(id: bigint) {
    await this.findUserById(id);
    return this.databaseService.user.update({
      where: { userId: id, deletedAt: null },
      data: { status: 'suspended' },
    });
  }

  async activateUser(id: bigint) {
    await this.findUserById(id);
    return this.databaseService.user.update({
      where: { userId: id, deletedAt: null },
      data: { status: 'active' },
    });
  }

  async linkUserToPerson(linkUserToPersonInput: LinkUserToPersonInput) {
    const { userId, personId } = linkUserToPersonInput;

    const user = await this.findUserById(userId);

    const person = await this.databaseService.person.findUnique({
      where: { personId },
    });

    if (!person) {
      throw new NotFoundException(`Person with id ${personId} does not exist`);
    }

    return await this.databaseService.user.update({
      where: { userId: userId },
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

  async deleteUser(id: bigint) {
    await this.findUserById(id);
    return this.databaseService.user.update({
      where: {
        userId: id,
        deletedAt: null,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async destroyUser(id: bigint) {
    await this.isDestroyable({ id });
    return this.databaseService.user.delete({ where: { userId: id } });
  }

  async retrieveUser(id: bigint) {
    await this.isRetrievable({ id });

    return this.databaseService.user.update({
      data: { deletedAt: null },
      where: { userId: id },
    });
  }

  async isDestroyable(where: Record<string, any>) {
    await isSoftDeleted(where, 'user', 'delete');
  }

  async isRetrievable(where: Record<string, any>) {
    await isSoftDeleted(where, 'user', 'retrieve');
  }
}
