import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressPersonUpdateInput } from './address-person-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';

@ArgsType()
export class UpdateOneAddressPersonArgs {

    @Field(() => AddressPersonUpdateInput, {nullable:false})
    @Type(() => AddressPersonUpdateInput)
    data!: AddressPersonUpdateInput;

    @Field(() => AddressPersonWhereUniqueInput, {nullable:false})
    @Type(() => AddressPersonWhereUniqueInput)
    where!: Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>;
}
