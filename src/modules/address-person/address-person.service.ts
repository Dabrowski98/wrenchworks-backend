import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AddressPerson } from './entities/address-person.entity';

@Injectable()
export class AddressPersonService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAllAddressPersons() {
    return this.databaseService.addressPerson.findMany();
  }

  async findAddressPersonByAddressId(addressId: bigint) {
    return this.databaseService.addressPerson.findMany({
      where: { addressId },
      include: { address: true, person: true },
    });
  }

  async findAddressPersonByPersonId(personId: bigint) {
    return this.databaseService.addressPerson.findMany({
      where: { personId },
      include: { address: true, person: true },
    });
  }
}
