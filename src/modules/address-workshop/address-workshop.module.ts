import { Module } from '@nestjs/common';
import { AddressWorkshopService } from './address-workshop.service';
import { AddressWorkshopResolver } from './address-workshop.resolver';

@Module({
  providers: [AddressWorkshopResolver, AddressWorkshopService],
})
export class AddressWorkshopModule {}
