import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import {
  Address,
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

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneAddressArgs): Promise<Address> {
    return this.prisma.address.create(args);
  }

  async update(args: UpdateOneAddressArgs): Promise<Address> {
    return this.prisma.address.update(args);
  }

  async findMany(args?: FindManyAddressArgs): Promise<Address[]> {
    return this.prisma.address.findMany(args);
  }

  async findOne(args: FindUniqueAddressArgs): Promise<Address> {
    return this.prisma.address.findUnique(args);
  }

  async findById(addressId: bigint): Promise<Address> {
    const record = await this.prisma.address.findUnique({
      where: { addressId },
    });

    if (!record) throw new RecordNotFoundError(Address);

    return record;
  }

  async delete(args: DeleteOneAddressArgs): Promise<Boolean> {
    return this.prisma.address
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
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
