import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateAddressInput, UpdateAddressInput } from './dto/index';

@Injectable()
export class AddressService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createAddress(data: CreateAddressInput) {
    // async createAddress(data: Prisma.AddressCreateInput) {
      return this.databaseService.address.create({
      data: {
        country: data.country,
        region: data.region,
        city: data.city,
        street: data.street,
        buildingNo: data.buildingNo,
        flatNo: data.flatNo,
        postCode: data.postCode,
        // Add relational data if necessary
      },
    });
  }

  async updateAddress(id: bigint, data: UpdateAddressInput) {
    return this.databaseService.address.update({
      where: { addressId: id },
      data: {
        country: data.country,
        region: data.region,
        city: data.city,
        street: data.street,
        buildingNo: data.buildingNo,
        flatNo: data.flatNo,
        postCode: data.postCode,
        // Add relational data if necessary
      },
    });
  }

  async deleteAddress(id: bigint) {
    return this.databaseService.address.delete({
      where: { addressId: id },
    });
  }

  async findAllAddresses() {
    return this.databaseService.address.findMany();
  }

  async findAddressById(id: bigint) {
    return this.databaseService.address.findUnique({
      where: { addressId: id },
    });
  }
}
