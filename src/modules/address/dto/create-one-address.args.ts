import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressCreateInput } from './address-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneAddressArgs {

    @Field(() => AddressCreateInput, {nullable:false})
    @Type(() => AddressCreateInput)
    @ValidateNested()
    data!: AddressCreateInput;
}
