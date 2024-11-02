import { Injectable } from '@nestjs/common';
import {
  AddressPerson,
  AddressPersonAddressIdPersonIdCompoundUniqueInput,
  CreateOneAddressPersonArgs,
  DeleteOneAddressPersonArgs,
} from 'src/@generated/address-person';

import { DeletePayload } from 'src/common/payloads/delete.payload';
import { DatabaseService } from 'src/database/database.service';
import { Person } from 'src/@generated/person';
import { Address } from 'src/@generated/address';

@Injectable()
export class AddressPersonService {
  constructor(private readonly prisma: DatabaseService) {}

  async linkAddressToPerson(
    args: CreateOneAddressPersonArgs,
  ): Promise<AddressPerson> {
    const { addressId } = args.data.address.connect;
    const { personId } = args.data.person.connect;

    await this.prisma.address.findUniqueOrThrow({ where: { addressId } });
    await this.prisma.person.findUniqueOrThrow({ where: { personId } });

    return this.prisma.addressPerson.create({
      data: { addressId, personId },
    });
  }

  async unlinkAddressFromPerson(
    args: DeleteOneAddressPersonArgs,
  ): Promise<DeletePayload> {
    const { where } = args;
    await this.prisma.addressPerson.delete({
      where: { addressId_personId: where.addressId_personId },
    });
    return { success: true };
  }

  async findAllAddressPersons(): Promise<AddressPerson[]> {
    return this.prisma.addressPerson.findMany();
  }

  async findAddressPersonByAddressId(
    addressId: bigint,
  ): Promise<AddressPerson[]> {
    return this.prisma.addressPerson.findMany({
      where: { addressId },
    });
  }

  async findAddressPersonByPersonId(
    personId: bigint,
  ): Promise<AddressPerson[]> {
    return this.prisma.addressPerson.findMany({
      where: { personId },
      include: { address: true, person: true },
    });
  }

  resolveAddress(addressId: bigint): Promise<Address> {
    return this.prisma.address.findFirst({
      where: { addressId },
    });
  }

  resolvePerson(personId: bigint): Promise<Person> {
    return this.prisma.person.findFirst({
      where: { personId },
    });
  }
}
