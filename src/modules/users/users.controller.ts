import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { ChangePasswordDto } from './DTOs/change-password-dto';
import { LinkUserToPersonDto } from './DTOs/link-user-to-person.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get('search')
  searchUsers(
    @Query('query') query: string,
    @Query('includeDeleted') includeDeleted: boolean,
  ) {
    return this.usersService.searchUsers(query, includeDeleted);
  }

  @Patch(':id/verify')
  verifyEmail(@Param('id') id: string) {
    return this.usersService.verifyEmail(+id);
  }

  @Patch('change-password')
  async changePassword(
    @Req() req,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    const userId = await req.user.userId;
    return this.usersService.changePassword(userId, changePasswordDto);
  }

  @Patch(':id/suspend')
  suspendUser(@Param('id') id: string) {
    return this.usersService.suspendUser(+id);
  }

  @Patch(':id/activate')
  activateUser(@Param('id') id: string) {
    return this.usersService.activateUser(+id);
  }

  @Patch('link-user-to-person')
  linkUserToPerson(@Body() linkUserToPersonDto: LinkUserToPersonDto) {
    this.usersService.linkUserToPerson(linkUserToPersonDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }

  @Delete(':id/hard')
  destroy(@Param('id') id: string) {
    return this.usersService.destroy(+id);
  }

  @Get(':id/retrieve')
  retrieve(@Param('id') id: string) {
    return this.usersService.retrieve(+id);
  }
}
