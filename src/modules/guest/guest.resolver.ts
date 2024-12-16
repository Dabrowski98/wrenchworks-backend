import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { GuestService } from './guest.service';
import { Guest } from './dto/guest.model';
import {
  CreateOneGuestArgs,
  UpdateOneGuestArgs,
  DeleteOneGuestArgs,
  FindUniqueGuestArgs,
  FindManyGuestArgs,
} from './dto';
import { Vehicle } from '../vehicle/dto/vehicle.model';
import { ServiceRequest } from '../service-request/dto/service-request.model';
import { Customer } from '../customer/dto/customer.model';

@Resolver(() => Guest)
export class GuestResolver {
  constructor(private readonly guestService: GuestService) {}

  /**
   * Creates a new guest.
   * @param args - Arguments for creating a guest.
   * @returns The created guest.
   */
  @Mutation(() => Guest)
  async createGuest(
    @Args() args: CreateOneGuestArgs,
  ): Promise<Guest> {
    return this.guestService.createGuest(args);
  }

  /**
   * Retrieves a guest by their unique ID.
   * @param args - Arguments containing the unique identifier.
   * @returns The found guest or null if not found.
   */
  @Query(() => Guest, { nullable: true })
  async guest(
    @Args() args: FindUniqueGuestArgs,
  ): Promise<Guest | null> {
    return this.guestService.findGuestById(BigInt(args.where.guestId));
  }

  /**
   * Retrieves all guests.
   * @param args - Optional arguments for filtering, pagination, etc.
   * @returns An array of guests.
   */
  @Query(() => [Guest])
  async guests(
    @Args() args?: FindManyGuestArgs,
  ): Promise<Guest[]> {
    return this.guestService.findAllGuests(args);
  }

  /**
   * Updates an existing guest.
   * @param args - Arguments for updating a guest.
   * @returns The updated guest.
   */
  @Mutation(() => Guest)
  async updateGuest(
    @Args() args: UpdateOneGuestArgs,
  ): Promise<Guest> {
    return this.guestService.updateGuest(args);
  }

  /**
   * Deletes a guest.
   * @param args - Arguments for deleting a guest.
   * @returns The deleted guest.
   */
  @Mutation(() => Guest)
  async deleteGuest(
    @Args() args: DeleteOneGuestArgs,
  ): Promise<Guest> {
    return this.guestService.deleteGuest(args);
  }

  /**
   * Resolves the vehicle associated with a guest.
   * @param guest - The parent guest object.
   * @returns The associated vehicle or null.
   */
  @ResolveField(() => Vehicle, { nullable: true })
  async vehicle(
    @Parent() guest: Guest,
  ): Promise<Vehicle | null> {
    return this.guestService.getVehicle(guest.guestId);
  }

  /**
   * Resolves the service request associated with a guest.
   * @param guest - The parent guest object.
   * @returns The associated service request or null.
   */
  @ResolveField(() => ServiceRequest, { nullable: true })
  async serviceRequest(
    @Parent() guest: Guest,
  ): Promise<ServiceRequest | null> {
    return this.guestService.getServiceRequest(guest.guestId);
  }

  /**
   * Resolves the customer associated with a guest.
   * @param guest - The parent guest object.
   * @returns The associated customer or null.
   */
  @ResolveField(() => Customer, { nullable: true })
  async customer(
    @Parent() guest: Guest,
  ): Promise<Customer | null> {
    return this.guestService.getCustomer(guest.guestId);
  }
} 