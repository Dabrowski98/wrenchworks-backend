import { Injectable } from '@nestjs/common';
import {
  CreateOneGuestArgs,
  UpdateOneGuestArgs,
  DeleteOneGuestArgs,
  FindUniqueGuestArgs,
  FindManyGuestArgs,
} from './dto';
import { Guest } from './dto/guest.model';
import { PrismaService } from 'src/database/prisma.service';
import { Vehicle } from '../vehicle/dto/vehicle.model';
import { ServiceRequest } from '../service-request';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Customer } from '../customer/dto';

@Injectable()
export class GuestService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneGuestArgs): Promise<Guest> {
    return this.prisma.guest.create({
      data: args.data,
    });
  }

  async findOne(args: FindUniqueGuestArgs): Promise<Guest> {
    const guest = await this.prisma.guest.findUnique(args);

    if (!guest) throw new RecordNotFoundError(Guest);

    return guest;
  }

  async findMany(args?: FindManyGuestArgs): Promise<Guest[]> {
    return this.prisma.guest.findMany();
  }

  async updateGuest(args: UpdateOneGuestArgs): Promise<Guest> {
    const { where, data } = args;
    return this.prisma.guest.update({
      where,
      data,
    });
  }

  async delete(args: DeleteOneGuestArgs): Promise<Guest> {
    return this.prisma.guest.delete({
      where: args.where,
    });
  }

  //RESOLVE METHODS

  async vehicle(guestId: bigint): Promise<Vehicle> {
    return (
      await this.prisma.guest.findUnique({
        where: { guestId },
        include: { vehicle: true },
      })
    ).vehicle;
  }

  async serviceRequest(guestId: bigint): Promise<ServiceRequest> {
    return (
      await this.prisma.guest.findUnique({
        where: { guestId },
        include: { serviceRequest: true },
      })
    ).serviceRequest;
  }

  async customer(guestId: bigint): Promise<Customer> {
    return (
      await this.prisma.guest.findUnique({
        where: { guestId },
        include: { customer: true },
      })
    ).customer;
  }
}
