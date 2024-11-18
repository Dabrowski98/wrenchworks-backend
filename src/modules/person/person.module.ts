import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonResolver } from './person.resolver';
import { AddressService } from '../address';

@Module({
  providers: [PersonResolver, PersonService],
})
export class PersonModule {}
