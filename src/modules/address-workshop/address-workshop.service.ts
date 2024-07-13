import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AddressWorkshop } from './entities/address-workshop.entity';

@Injectable()
export class AddressWorkshopService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAllAddressWorkshops() {
    return this.databaseService.addressWorkshop.findMany();
  }

  async findAddressWorkshopByAddressId(addressId: bigint) {
    return this.databaseService.addressWorkshop.findMany({
      where: { addressId },
      include: { address: true, workshop: true },
    });
  }

  async findAddressWorkshopByWorkshopId(workshopId: bigint) {
    return this.databaseService.addressWorkshop.findMany({
      where: { workshopId },
      include: { address: true, workshop: true },
    });
  }
}
