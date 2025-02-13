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
  DeleteManyAddressArgs,
} from './dto';
import { User } from '../user/dto';
import { Workshop } from '../workshop/dto';
import { accessibleBy } from '@casl/prisma';
import { Action, AbilityFactory } from '../ability/ability.factory';
import { CreateAddressForWorkshopArgs } from './custom-dto/create-address-for-workshop.args';
import { Prisma } from '@prisma/client';
import { Mutation, Args, Query, Parent, ResolveField } from '@nestjs/graphql';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { ForbiddenError, subject } from '@casl/ability';
import { CheckAbilities } from '../ability';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';

@Injectable()
export class AddressService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userAbilityFactory: AbilityFactory,
  ) {}

  async create(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: CreateAddressForWorkshopArgs,
  ): Promise<Address> {
    const workshop = await this.prisma.workshop.findUniqueOrThrow({
      where: { workshopId: args.workshopId },
      include: { address: true },
    });

    const ability = await this.userAbilityFactory.defineAbility(currentEntity);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Address', { workshop } as any as Address),
    );

    if (workshop.address) {
      throw new BadRequestError('Workshop already has an address');
    }

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
    const address = await this.prisma.address.findUnique({
      where: args.where,
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    if (address.workshop) {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Update,
        subject('Address', address),
      );
    }

    return this.prisma.address.update(args);
  }

  async findOne(args: FindUniqueAddressArgs): Promise<Address> {
    const record = await this.prisma.address.findFirst({
      where: args.where,
    });
    if (!record) throw new RecordNotFoundError(Address);
    return record;
  }

  async findMany(args?: FindManyAddressArgs): Promise<Address[]> {
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
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    const ability = await this.userAbilityFactory.defineAbility(currentEntity);

    if (address.workshop) {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Delete,
        subject('Address', address),
      );
    }

    return this.prisma.address
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => {
        return false;
      });
  }

  async deleteMany(
    args: DeleteManyAddressArgs,
  ): Promise<boolean> {
    return this.prisma.address
      .deleteMany({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
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
