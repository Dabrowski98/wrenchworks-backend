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

@Injectable()
export class GuestService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Creates a new guest.
   * @param args - Arguments for creating a guest.
   * @returns The created guest.
   */
  async createGuest(args: CreateOneGuestArgs): Promise<Guest> {
    return this.prisma.guest.create({
      data: args.data,
    });
  }

  /**
   * Finds a guest by their unique ID.
   * @param guestId - The ID of the guest to find.
   * @returns The found guest or null if not found.
   */
  async findGuestById(guestId: bigint): Promise<Guest | null> {
    return this.prisma.guest.findUnique({
      where: { guestId },
    });
  }

  /**
   * Retrieves all guests.
   * @returns An array of guests.
   */
  async findAllGuests(args?: FindManyGuestArgs): Promise<Guest[]> {
    // You can enhance this method to handle filtering, pagination, etc., based on FindManyGuestArgs
    return this.prisma.guest.findMany();
  }

  /**
   * Updates an existing guest.
   * @param args - Arguments for updating a guest.
   * @returns The updated guest.
   */
  async updateGuest(args: UpdateOneGuestArgs): Promise<Guest> {
    const { where, data } = args;
    return this.prisma.guest.update({
      where,
      data,
    });
  }

  /**
   * Deletes a guest.
   * @param args - Arguments for deleting a guest.
   * @returns The deleted guest.
   */
  async deleteGuest(args: DeleteOneGuestArgs): Promise<Guest> {
    return this.prisma.guest.delete({
      where: args.where,
    });
  }

  /**
   * Retrieves the vehicle associated with a guest.
   * @param guestId - The ID of the guest.
   * @returns The associated vehicle or null.
   */
  async getVehicle(guestId: bigint) {
    return this.prisma.guest
      .findUnique({
        where: { guestId },
      })
      .vehicle();
  }

  /**
   * Retrieves the service request associated with a guest.
   * @param guestId - The ID of the guest.
   * @returns The associated service request or null.
   */
  async getServiceRequest(guestId: bigint) {
    return this.prisma.guest
      .findUnique({
        where: { guestId },
      })
      .serviceRequest();
  }

  /**
   * Retrieves the customer associated with a guest.
   * @param guestId - The ID of the guest.
   * @returns The associated customer or null.
   */
  async getCustomer(guestId: bigint) {
    return this.prisma.guest
      .findUnique({
        where: { guestId },
      })
      .customer();
  }
} 