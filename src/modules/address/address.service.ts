import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { HelperService } from 'src/common/helper.service';
import {
  Address,
  CreateOneAddressArgs,
  DeleteOneAddressArgs,
  FindUniqueAddressArgs,
  UpdateOneAddressArgs,
} from 'src/@generated/address';
import { error } from 'console';
import { EntityNotFoundError } from 'src/config/errors.config';
import { GraphQLError } from 'graphql';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library';

@Injectable()
export class AddressService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly helperService: HelperService,
  ) {
    helperService.setModelName(Address);
  }

  async createAddress(args: CreateOneAddressArgs): Promise<any> {
    return this.prisma.address.create(args);
  }

  async updateAddress(args: UpdateOneAddressArgs): Promise<any> {
    const { data, where } = args;
    return this.prisma.address.update({
      where: { addressId: where.addressId },
      data,
    });
  }

  async deleteAddress(args: DeleteOneAddressArgs): Promise<any> {
    const { where } = args;

    await this.prisma.address.delete({
      where: { addressId: where.addressId },
    });

    return { success: true, error: 'null' };
  }

  async findAllAddresses(): Promise<any> {
    return this.prisma.address.findMany();
  }

  async findAddressById(args: FindUniqueAddressArgs): Promise<any> {
    const { where } = args;

    const entity = await this.prisma.address.findUnique({
      where: { addressId: where.addressId },
    });

    if (!entity) {
      throw new EntityNotFoundError(
        `Address with id ${args.where.addressId} was not found.`,
      );
    }

    return entity;
  }

  async findAddressPersonsByAddressId(addressId: bigint): Promise<any> {
    return this.prisma.addressPerson.findMany({
      where: { addressId: addressId },
    });
  }

  async findAddressWorkshopsByAddressId(addressId: bigint): Promise<any> {
    return this.prisma.addressWorkshop.findMany({
      where: { addressId: addressId },
    });
  }
}
