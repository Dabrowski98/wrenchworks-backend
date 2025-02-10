import { AbilityFactory } from './ability.factory';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [AbilityFactory],
  exports: [AbilityFactory],
})
export class AbilityModule {}
