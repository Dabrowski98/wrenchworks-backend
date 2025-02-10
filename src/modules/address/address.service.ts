import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  ForbiddenError as MyForbiddenError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import {
  Address,
  AddressCreateInput,
  AddressUpdateInput,
  AddressWhereUniqueInput,
  CreateOneAddressArgs,
  DeleteOneAddressArgs,
  FindManyAddressArgs,
  FindUniqueAddressArgs,
  UpdateOneAddressArgs,
} from './dto';
import { User } from '../user/dto';
import { Workshop } from '../workshop/dto';
import { JwtUserPayload } from '../auth/user-auth/dto';
import { accessibleBy } from '@casl/prisma';
import { Action, AbilityFactory } from '../ability/ability.factory';
import { CreateAddressForUserArgs } from './custom-dto/create-create-for-user.args';
import { CreateAddressForWorkshopArgs } from './custom-dto/create-address-for-workshop.args';
import { Prisma } from '@prisma/client';
import { Mutation, Args, Query, Parent, ResolveField } from '@nestjs/graphql';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { ForbiddenError, subject } from '@casl/ability';
import { CheckAbilities } from '../ability';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';

@Injectable()
export class AddressService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userAbilityFactory: AbilityFactory,
  ) {}

  async create(
    input: AddressCreateInput,
    userId?: bigint,
    workshopId?: bigint,
  ): Promise<Address> {
    return this.prisma.address.create({
      data: {
        ...input,
        user: userId ? { connect: { userId } } : undefined,
        workshop: workshopId ? { connect: { workshopId } } : undefined,
      },
    });
  }

  async createAddressForUser(
    args: CreateAddressForUserArgs,
    currentUser: JwtUserPayload,
  ): Promise<Address> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { userId: args.userId },
      include: { address: true },
    });
    const ability = await this.userAbilityFactory.defineAbility(currentUser);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Address', { user } as any as Address),
    );

    if (user?.address)
      throw new MyForbiddenError(
        'User already has an address, please update it instead',
      );

    return this.prisma.address.create({
      data: { ...args.data, user: { connect: { userId: args.userId } } },
    });
  }

  async createAddressForWorkshop(
    args: CreateAddressForWorkshopArgs,
    currentUser: JwtUserPayload,
  ): Promise<Address> {
    const workshop = await this.prisma.workshop.findUniqueOrThrow({
      where: { workshopId: args.workshopId },
      include: { address: true },
    });

    if (workshop?.address)
      throw new MyForbiddenError(
        'Workshop already has an address, please update it instead',
      );

    const ability = await this.userAbilityFactory.defineAbility(currentUser);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Address', { workshop } as any as Address),
    );

    return this.prisma.address.create({
      data: {
        ...args.data,
        workshop: { connect: { workshopId: args.workshopId } },
      },
    });
  }

  async update(
    args: UpdateOneAddressArgs,
    currentUser: JwtUserPayload,
  ): Promise<Address> {
    const ability = await this.userAbilityFactory.defineAbility(currentUser);

    const address = await this.prisma.address.findUniqueOrThrow({
      where: args.where,
      include: {
        user: true,
        workshop: true,
      },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Address', address),
    );

    return this.prisma.address.update(args);
  }

  async findMany(
    args: FindManyAddressArgs,
    currentUser: JwtUserPayload,
  ): Promise<Address[]> {
    const ability = this.userAbilityFactory.defineAbility(currentUser);
    try {
      return this.prisma.address.findMany({
        where: { AND: [accessibleBy(ability).Address, args.where || {}] },
      });
    } catch {
      return [];
    }
  }

  async findOne(
    args: FindUniqueAddressArgs,
    currentUser: JwtUserPayload,
  ): Promise<Address> {
    const ability = this.userAbilityFactory.defineAbility(currentUser);
    const record = await this.prisma.address.findFirst({
      where: { AND: [accessibleBy(ability).Address, args.where] },
      include: {
        user: true,
        workshop: true,
      },
    });

    if (!record) throw new RecordNotFoundError(Address);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Read,
      subject('Address', record),
    );

    return record;
  }

  async findById(
    addressId: bigint,
    currentUser: JwtUserPayload,
  ): Promise<Address> {
    const ability = this.userAbilityFactory.defineAbility(currentUser);

    const record = await this.prisma.address.findUnique({
      where: { addressId },
    });

    if (!record) throw new RecordNotFoundError(Address);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Read,
      subject('Address', record),
    );

    return record;
  }

  async delete(
    args: DeleteOneAddressArgs,
    currentUser: JwtUserPayload,
  ): Promise<Boolean> {
    const address = await this.prisma.address.findUniqueOrThrow({
      where: args.where,
    });

    const ability = await this.userAbilityFactory.defineAbility(currentUser);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('Address', address),
    );

    return this.prisma.address
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => {
        return false;
      });
  }

  //RESOLVE METHODS

  async user(addressId: bigint): Promise<User> {
    return (
      await this.prisma.address.findUnique({
        where: { addressId },
        include: { user: true },
      })
    ).user;
  }

  async workshop(addressId: bigint): Promise<Workshop> {
    return (
      await this.prisma.address.findUnique({
        where: { addressId },
        include: { workshop: true },
      })
    ).workshop;
  }
}
