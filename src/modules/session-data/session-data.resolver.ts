import { Resolver, Query, Mutation, Args, Parent, ResolveField } from '@nestjs/graphql';
import { SessionDataService } from './session-data.service';
import { SessionData } from './dto/session-data.model';
import { SessionDataCreateInput, SessionDataUpdateInput } from './dto';
import { Action, CheckAbilities } from '../ability';
import { User } from '../user/dto';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { UseGuards } from '@nestjs/common';

@UseGuards(UserJwtAuthGuard, AbilitiesGuard)
@Resolver(() => SessionData)
export class SessionDataResolver {
  constructor(private readonly sessionDataService: SessionDataService) {}


  @Mutation(() => SessionData)
  async createSessionData(
    @Args('sessionDataCreateInput')
    sessionDataCreateInput: SessionDataCreateInput,
  ): Promise<SessionData> {
    return this.sessionDataService.create(sessionDataCreateInput);
  }

  @Query(() => [SessionData], { name: 'getAllSessionData' })
  async findAll(): Promise<SessionData[]> {
    return this.sessionDataService.findAll();
  }

  @Query(() => SessionData, { name: 'getSessionData' })
  async findOne(@Args('id') id: string): Promise<SessionData> {
    return this.sessionDataService.findOne(id);
  }

  @Mutation(() => SessionData)
  async updateSessionData(
    @Args('sessionDataId') sessionDataId: string,
    @Args('sessionDataUpdateInput')
    sessionDataUpdateInput: SessionDataUpdateInput,
  ): Promise<SessionData> {
    return this.sessionDataService.update(
      sessionDataId,
      sessionDataUpdateInput,
    );
  }

  @Mutation(() => Boolean)
  async deleteSessionData(
    @Args('sessionDataId') sessionDataId: string,
  ): Promise<boolean> {
    return this.sessionDataService.delete(sessionDataId);
  }

  // RESOLVE METHODS

  @ResolveField(() => User)
  async user(@Parent() sessionData: SessionData): Promise<User> {
    return this.sessionDataService.user(sessionData.sessionDataId);
  }
}
