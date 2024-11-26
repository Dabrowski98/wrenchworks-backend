import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import {
  Address,
  AddressUpdateInput,
  AddressWhereUniqueInput,
  CreateOneAddressArgs,
  DeleteOneAddressArgs,
  UpdateOneAddressArgs,
} from './dto';
import { User } from '../user';
import { Workshop } from '../workshop/dto';


@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async createAddress(args: CreateOneAddressArgs): Promise<Address> {
    return this.prisma.address.create(args);
  }

  async updateAddress(args: UpdateOneAddressArgs): Promise<Address> {
    return this.prisma.address.update(args);
  }

  async findAllAddresses(): Promise<Address[]> {
    return this.prisma.address.findMany();
  }

  async findAddressById(addressId: bigint): Promise<Address> {
    const record = await this.prisma.address.findUnique({
      where: { addressId },
    });

    if (!record) throw new RecordNotFoundError(Address);

    return record;
  }

  async deleteAddress(args: DeleteOneAddressArgs): Promise<DeletePayload> {
    const { where } = args;

    await this.prisma.address.delete({
      where: { addressId: where.addressId },
    });

    return { success: true };
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
