import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';
import { Type } from 'class-transformer';
import { AddressPersonCreateInput } from './address-person-create.input';
import { AddressPersonUpdateInput } from './address-person-update.input';

@ArgsType()
export class UpsertOneAddressPersonArgs {

    @Field(() => AddressPersonWhereUniqueInput, {nullable:false})
    @Type(() => AddressPersonWhereUniqueInput)
    where!: Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>;

    @Field(() => AddressPersonCreateInput, {nullable:false})
    @Type(() => AddressPersonCreateInput)
    create!: AddressPersonCreateInput;

    @Field(() => AddressPersonUpdateInput, {nullable:false})
    @Type(() => AddressPersonUpdateInput)
    update!: AddressPersonUpdateInput;
}
