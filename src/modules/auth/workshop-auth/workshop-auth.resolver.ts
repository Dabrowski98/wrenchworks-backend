import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { UseGuards } from '@nestjs/common';
import { WorkshopAuthService } from './workshop-auth.service';
import { UserJwtAuthGuard } from '../user-auth/guards/user-jwt-auth.guard';
import { RegisterWorkshopInput } from './dto/register-workshop.input';
import { RegisterWorkshopResponse } from './dto/register-workshop.response';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { JwtUserPayload } from '../user-auth/dto/jwt-user-payload';
import { Action, CheckAbilities } from 'src/modules/ability';

@Resolver()
export class WorkshopAuthResolver {
  constructor(private readonly workshopAuthService: WorkshopAuthService) {}

  // USER can register workshop
  @CheckAbilities({ action: Action.Create, subject: 'Workshop' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => RegisterWorkshopResponse)
  registerWorkshop(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args('registerWorkshopInput') registerWorkshopInput: RegisterWorkshopInput,
  ): Promise<RegisterWorkshopResponse> {
    return this.workshopAuthService.registerWorkshop(
      currentUser,
      registerWorkshopInput,
    );
  }
}
