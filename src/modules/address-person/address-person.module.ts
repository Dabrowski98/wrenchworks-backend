import { Module } from '@nestjs/common';
import { AddressPersonResolver } from './address-person.resolver';
import { AddressPersonService } from './address-person.service';

@Module({
  providers: [AddressPersonResolver, AddressPersonService],
})
export class AddressPersonModule {}
