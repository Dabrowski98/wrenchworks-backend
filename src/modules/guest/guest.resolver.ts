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
  DeleteManyGuestArgs,
} from './dto';
import { Vehicle } from '../vehicle/dto/vehicle.model';
import { ServiceRequest } from '../service-request/dto/service-request.model';
import { Customer } from '../customer/dto/customer.model';
import { GraphQLBigInt } from 'graphql-scalars';
import { Action, CheckAbilities } from '../ability';
import { UseGuards } from '@nestjs/common';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { PureAbility } from '@casl/ability';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
@Resolver(() => Guest)
export class GuestResolver {
  constructor(private readonly guestService: GuestService) {}

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Read, subject: 'Guest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Guest)
  guest(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: FindUniqueGuestArgs,
  ): Promise<Guest> {
    return this.guestService.findOne(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Read, subject: 'Guest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [Guest])
  guests(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args?: FindManyGuestArgs,
  ): Promise<Guest[]> {
    return this.guestService.findMany(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'Guest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Guest)
  updateGuest(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: UpdateOneGuestArgs,
  ): Promise<Guest> {
    return this.guestService.updateGuest(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'Guest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  deleteGuest(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: DeleteOneGuestArgs,
  ): Promise<Boolean> {
    return this.guestService.delete(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'Guest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteManyGuest(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: DeleteManyGuestArgs,
  ): Promise<boolean> {
    return this.guestService.deleteMany(currentEntity, args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => Vehicle, { nullable: true })
  vehicle(
    @CurrentAbility() ability: PureAbility,
    @Parent() guest: Guest,
  ): Promise<Vehicle | null> {
    return this.guestService.vehicle(ability, guest.guestId);
  }

  @ResolveField(() => ServiceRequest, { nullable: true })
  serviceRequest(
    @CurrentAbility() ability: PureAbility,
    @Parent() guest: Guest,
  ): Promise<ServiceRequest | null> {
    return this.guestService.serviceRequest(ability, guest.guestId);
  }

  @ResolveField(() => Customer, { nullable: true })
  customer(
    @CurrentAbility() ability: PureAbility,
    @Parent() guest: Guest,
  ): Promise<Customer | null> {
    return this.guestService.customer(ability, guest.guestId);
  }
}
