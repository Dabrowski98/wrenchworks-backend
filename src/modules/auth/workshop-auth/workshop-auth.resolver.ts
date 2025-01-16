import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { UseGuards } from '@nestjs/common';
import { WorkshopAuthService } from './workshop-auth.service';
import { UserJwtAuthGuard } from '../user-auth/guards/user-jwt-auth.guard';
import { RegisterWorkshopInput } from './dto/register-workshop.input';
import { RegisterWorkshopResponse } from './dto/register-workshop.response';

//TODO: ensure permissions
@Resolver()
export class WorkshopAuthResolver {
  constructor(private readonly workshopAuthService: WorkshopAuthService) {}

  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => RegisterWorkshopResponse)
  registerWorkshop(
    @Args('registerWorkshopInput') registerWorkshopInput: RegisterWorkshopInput,
    @CurrentUserID() userId: bigint,
  ) {
    return this.workshopAuthService.registerWorkshop(
      registerWorkshopInput,
      userId,
    );
  }
}
