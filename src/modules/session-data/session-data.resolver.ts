import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { SessionDataService } from './session-data.service';
import { SessionData } from './dto/session-data.model';
import {
  DeleteManySessionDataArgs,
  DeleteOneSessionDataArgs,
  FindManySessionDataArgs,
  FindUniqueSessionDataArgs,
  SessionDataCreateInput,
  SessionDataUpdateInput,
  UpdateOneSessionDataArgs,
} from './dto';
import { Action, CheckAbilities } from '../ability';
import { User } from '../user/dto';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { UseGuards } from '@nestjs/common';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { GraphQLBigInt } from 'graphql-scalars';
import { RenameSessionDataArgs } from './custom-dto/rename-session-data.args';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';

@Resolver(() => SessionData)
export class SessionDataResolver {
  constructor(private readonly sessionDataService: SessionDataService) {}

  // ADMIN
  @CheckAbilities({ action: Action.Create, subject: 'SessionData' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => SessionData)
  async createSessionData(
    @Args('sessionDataCreateInput')
    sessionDataCreateInput: SessionDataCreateInput,
  ): Promise<SessionData> {
    return this.sessionDataService.create(sessionDataCreateInput);
  }

  // ADMIN, USER
  @CheckAbilities({ action: Action.Read, subject: 'SessionData' })
  @UseGuards(UserJwtAuthGuard)
  @Query(() => [SessionData])
  async sessionDatas(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindManySessionDataArgs,
  ): Promise<SessionData[]> {
    return this.sessionDataService.findMany(currentEntity, args);
  }

  // ADMIN, USER
  @CheckAbilities({ action: Action.Read, subject: 'SessionData' })
  @UseGuards(UserJwtAuthGuard)
  @Query(() => SessionData)
  async sessionData(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindUniqueSessionDataArgs,
  ): Promise<SessionData> {
    return this.sessionDataService.findOne(currentEntity, args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'SessionData' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => SessionData)
  async updateSessionData(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: UpdateOneSessionDataArgs,
  ): Promise<SessionData> {
    return this.sessionDataService.update(currentEntity, args);
  }

  // ADMIN, USER
  @CheckAbilities({ action: Action.Update, subject: 'SessionData' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => SessionData)
  async renameSessionData(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: RenameSessionDataArgs,
  ): Promise<SessionData> {
    return this.sessionDataService.rename(currentEntity, args);
  }

  // RESOLVE METHODS
 
  @ResolveField(() => User, { nullable: true })
  async user(
    @CurrentAbility() ability: PureAbility,
    @Parent() sessionData: SessionData,
  ): Promise<User | null> {
    return this.sessionDataService.user(
      ability,
      sessionData.sessionDataId,
    );
  }
}