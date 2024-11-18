import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressCreateInput } from './address-create.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@ArgsType()
export class CreateOneAddressArgs {

    @Field(() => AddressCreateInput, {nullable:false})
    @Type(() => AddressCreateInput)
    @Validator.ValidateNested()
    data!: AddressCreateInput;
}
