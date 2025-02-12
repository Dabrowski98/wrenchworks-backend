import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  BadRequestError,
  CustomForbiddenError as MyForbiddenError,
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
import { JwtEmployeePayload } from '../auth/employee-auth/dto';
import { EntityType } from 'src/common/enums/entity-type.enum';

@Injectable()
export class AddressService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userAbilityFactory: AbilityFactory,
  ) {}

  async create(
    input: AddressCreateInput,
    workshopId?: bigint,
  ): Promise<Address> {
    return this.prisma.address.create({
      data: {
        ...input,
        workshop: workshopId ? { connect: { workshopId } } : undefined,
      },
    });
  }

  async createAddressForWorkshop(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: CreateAddressForWorkshopArgs,
  ): Promise<Address> {
    const workshopWithAddress = await this.prisma.workshop.findUniqueOrThrow({
      where: { workshopId: args.workshopId },
      include: { address: true },
    });

    const ability = await this.userAbilityFactory.defineAbility(currentEntity);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Address', { workshop: workshopWithAddress } as any as Address),
    );

    return this.prisma.address.create({
      data: {
        ...args.data,
        workshop: { connect: { workshopId: args.workshopId } },
      },
    });
  }

  async update(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: UpdateOneAddressArgs,
  ): Promise<Address> {
    const ability = await this.userAbilityFactory.defineAbility(currentEntity);
    const addressWithUserAndWorkshop =
      await this.prisma.address.findUniqueOrThrow({
        where: args.where,
        include: {
          workshop: true,
        },
      });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Address', addressWithUserAndWorkshop),
    );

    return this.prisma.address.update(args);
  }

  async findOne(args: FindUniqueAddressArgs): Promise<Address> {
    const record = await this.prisma.address.findFirst({
      where: args.where,
    });
    if (!record) throw new RecordNotFoundError(Address);
    return record;
  }

  async findMany(args: FindManyAddressArgs): Promise<Address[]> {
    return this.prisma.address.findMany({
      where: args.where || {},
    });
  }

  async delete(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: DeleteOneAddressArgs,
  ): Promise<Boolean> {
    const address = await this.prisma.address.findUniqueOrThrow({
      where: args.where,
    });

    const ability = await this.userAbilityFactory.defineAbility(currentEntity);
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

  async workshop(addressId: bigint): Promise<Workshop> {
    return (
      await this.prisma.address.findUnique({
        where: { addressId },
        include: { workshop: true },
      })
    ).workshop;
  }
}
