import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SessionDataService } from './session-data.service';
import { SessionData } from './dto/session-data.model';
import { SessionDataCreateInput, SessionDataUpdateInput } from './dto';
 
@Resolver(() => SessionData)
export class SessionDataResolver {
  constructor(private readonly sessionDataService: SessionDataService) {}

//   @Mutation(() => SessionData)
//   async createSessionData(
//     @Args('sessionDataCreateInput') sessionDataCreateInput: SessionDataCreateInput,
//   ): Promise<SessionData> {
//     return this.sessionDataService.create(sessionDataCreateInput);
//   }

//   @Query(() => [SessionData], { name: 'getAllSessionData' })
//   async findAll(): Promise<SessionData[]> {
//     return this.sessionDataService.findAll();
//   }

//   @Query(() => SessionData, { name: 'getSessionData' })
//   async findOne(@Args('id') id: string): Promise<SessionData> {
//     return this.sessionDataService.findOne(id);
//   }

//   @Mutation(() => SessionData)
//   async updateSessionData(
//     @Args('id') id: string,
//     @Args('sessionDataUpdateInput') sessionDataUpdateInput: SessionDataUpdateInput,
//   ): Promise<SessionData> {
//     return this.sessionDataService.update(id, sessionDataUpdateInput);
//   }

//   @Mutation(() => SessionData)
//   async deleteSessionData(@Args('id') id: string): Promise<SessionData> {
//     return this.sessionDataService.remove(id);
//   }
} 