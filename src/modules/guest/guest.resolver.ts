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
import { Action, CheckAbilities } from '../ability';
import { UseGuards } from '@nestjs/common';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';

@UseGuards(UserJwtAuthGuard, AbilitiesGuard)
@Resolver(() => Guest)
export class GuestResolver {
  constructor(private readonly guestService: GuestService) {}

  @CheckAbilities({ action: Action.Read, subject: 'Guest' })
  @Query(() => Guest)
  guest(@Args() args: FindUniqueGuestArgs): Promise<Guest> {
    return this.guestService.findOne(args);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Guest' })
  @Query(() => [Guest])
  guests(@Args() args?: FindManyGuestArgs): Promise<Guest[]> {
    return this.guestService.findMany(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'Guest' })
  @Mutation(() => Guest)
  updateGuest(@Args() args: UpdateOneGuestArgs): Promise<Guest> {
    return this.guestService.updateGuest(args);
  }

  @CheckAbilities({ action: Action.Delete, subject: 'Guest' })
  @Mutation(() => Boolean)
  deleteGuest(@Args() args: DeleteOneGuestArgs): Promise<Boolean> {
    return this.guestService.delete(args);
  }

  // RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'Vehicle' })
  @ResolveField(() => Vehicle, { nullable: true })
  vehicle(@Parent() guest: Guest): Promise<Vehicle | null> {
    return this.guestService.vehicle(guest.guestId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'ServiceRequest' })
  @ResolveField(() => ServiceRequest, { nullable: true })
  serviceRequest(@Parent() guest: Guest): Promise<ServiceRequest | null> {
    return this.guestService.serviceRequest(guest.guestId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Customer' })
  @ResolveField(() => Customer, { nullable: true })
  customer(@Parent() guest: Guest): Promise<Customer | null> {
    return this.guestService.customer(guest.guestId);
  }
}
