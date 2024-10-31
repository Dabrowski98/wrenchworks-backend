import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWorkshopWhereInput } from './address-workshop-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAddressWorkshopArgs {

    @Field(() => AddressWorkshopWhereInput, {nullable:true})
    @Type(() => AddressWorkshopWhereInput)
    where?: AddressWorkshopWhereInput;
}
