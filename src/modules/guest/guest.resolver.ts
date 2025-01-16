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
import { GraphQLBigInt } from 'graphql-scalars';

@Resolver(() => Guest)
export class GuestResolver {
  constructor(private readonly guestService: GuestService) {}

  @Query(() => Guest)
  guest(@Args() args: FindUniqueGuestArgs): Promise<Guest> {
    return this.guestService.findOne(args);
  }

  @Query(() => [Guest])
  guests(@Args() args?: FindManyGuestArgs): Promise<Guest[]> {
    return this.guestService.findMany(args);
  }

  //admin only
  @Mutation(() => Guest)
  updateGuest(@Args() args: UpdateOneGuestArgs): Promise<Guest> {
    return this.guestService.updateGuest(args);
  }

  @Mutation(() => Boolean)
  deleteGuest(@Args() args: DeleteOneGuestArgs): Promise<Boolean> {
    return this.guestService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => Vehicle, { nullable: true })
  vehicle(@Parent() guest: Guest): Promise<Vehicle | null> {
    return this.guestService.vehicle(guest.guestId);
  }

  @ResolveField(() => ServiceRequest, { nullable: true })
  serviceRequest(@Parent() guest: Guest): Promise<ServiceRequest | null> {
    return this.guestService.serviceRequest(guest.guestId);
  }

  @ResolveField(() => Customer, { nullable: true })
  customer(@Parent() guest: Guest): Promise<Customer | null> {
    return this.guestService.customer(guest.guestId);
  }
}
