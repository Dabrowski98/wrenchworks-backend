import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import {
  CreateOneAddressArgs,
  DeleteOneAddressArgs,
  FindUniqueAddressArgs,
  UpdateOneAddressArgs,
} from 'src/@generated/address';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: DatabaseService) {}

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

    const record = await this.prisma.address.findUnique({
      where: { addressId: where.addressId },
    });

    if (!record) throw new RecordNotFoundError();

    return record;
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
