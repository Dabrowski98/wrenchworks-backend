import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressUpdateInput } from './address-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneAddressArgs {

    @Field(() => AddressUpdateInput, {nullable:false})
    @Type(() => AddressUpdateInput)
    @Validator.ValidateNested()
    data!: AddressUpdateInput;

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;
}
