import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
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

  // @Mutation(() => Guest)
  // async createGuest(@Args() args: CreateOneGuestArgs): Promise<Guest> {
  //   return this.guestService.createGuest(args);
  // }

  @Query(() => Guest)
  async guest(@Args() args: FindUniqueGuestArgs): Promise<Guest> {
    return this.guestService.findGuestById(BigInt(args.where.guestId));
  }

  @Query(() => [Guest])
  async guests(@Args() args?: FindManyGuestArgs): Promise<Guest[]> {
    return this.guestService.findAllGuests(args);
  }

  // @Mutation(() => Guest)
  // async updateGuest(@Args() args: UpdateOneGuestArgs): Promise<Guest> {
  //   return this.guestService.updateGuest(args);
  // }

  @Mutation(() => Guest)
  async deleteGuest(@Args() args: DeleteOneGuestArgs): Promise<Guest> {
    return this.guestService.deleteGuest(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => Vehicle)
  async vehicle(@Parent() guest: Guest): Promise<Vehicle> {
    return this.guestService.vehicle(guest.guestId);
  }

  @ResolveField(() => ServiceRequest)
  serviceRequest(@Parent() guest: Guest): Promise<ServiceRequest> {
    return this.guestService.serviceRequest(guest.guestId);
  }

  @ResolveField(() => Customer)
  customer(@Parent() guest: Guest): Promise<Customer> {
    return this.guestService.customer(guest.guestId);
  }
}
