import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { UseGuards } from '@nestjs/common';
import { WorkshopAuthService } from './workshop-auth.service';
import { UserJwtAuthGuard } from '../user-auth/guards/user-jwt-auth.guard';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { JwtUserPayload } from '../user-auth/custom-dto/jwt-user-payload';
import { Action, CheckAbilities } from 'src/modules/ability';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { RegisterWorkshopResponse } from './custom-dto';
import { RegisterWorkshopArgs } from './custom-dto/register-workshop.args';

@Resolver()
export class WorkshopAuthResolver {
  constructor(private readonly workshopAuthService: WorkshopAuthService) {}

  // USER can register workshop
  @CheckAbilities({ action: Action.Create, subject: 'Workshop' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => RegisterWorkshopResponse)
  registerWorkshop(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: RegisterWorkshopArgs,
  ): Promise<RegisterWorkshopResponse> {
    return this.workshopAuthService.registerWorkshop(currentUser, args);
  }
}
