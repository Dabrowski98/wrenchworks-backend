import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressPersonCreateInput } from './address-person-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAddressPersonArgs {

    @Field(() => AddressPersonCreateInput, {nullable:false})
    @Type(() => AddressPersonCreateInput)
    data!: AddressPersonCreateInput;
}
