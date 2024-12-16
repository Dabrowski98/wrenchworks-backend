import { Module } from '@nestjs/common';
import { GuestService } from './guest.service';
import { GuestResolver } from './guest.resolver';

@Module({
  providers: [GuestService, GuestResolver],
  exports: [GuestService],
})
export class GuestModule {}
