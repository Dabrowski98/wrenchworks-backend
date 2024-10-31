import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWorkshopCreateInput } from './address-workshop-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAddressWorkshopArgs {

    @Field(() => AddressWorkshopCreateInput, {nullable:false})
    @Type(() => AddressWorkshopCreateInput)
    data!: AddressWorkshopCreateInput;
}
