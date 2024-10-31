import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateInput } from './address-create.input';
import { AddressUpdateInput } from './address-update.input';

@ArgsType()
export class UpsertOneAddressArgs {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressCreateInput, {nullable:false})
    @Type(() => AddressCreateInput)
    create!: AddressCreateInput;

    @Field(() => AddressUpdateInput, {nullable:false})
    @Type(() => AddressUpdateInput)
    update!: AddressUpdateInput;
}
