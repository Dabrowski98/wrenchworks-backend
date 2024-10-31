import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressCreateInput } from './address-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAddressArgs {

    @Field(() => AddressCreateInput, {nullable:false})
    @Type(() => AddressCreateInput)
    data!: AddressCreateInput;
}
