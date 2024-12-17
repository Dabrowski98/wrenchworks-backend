import { UserAbilityFactory } from './user-ability.factory';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [UserAbilityFactory],
  exports: [UserAbilityFactory],
})
export class UserAbilityModule {}
