import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';
import { Type } from 'class-transformer';
import { AddressPersonUpdateWithoutAddressInput } from './address-person-update-without-address.input';

@InputType()
export class AddressPersonUpdateWithWhereUniqueWithoutAddressInput {

    @Field(() => AddressPersonWhereUniqueInput, {nullable:false})
    @Type(() => AddressPersonWhereUniqueInput)
    where!: Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>;

    @Field(() => AddressPersonUpdateWithoutAddressInput, {nullable:false})
    @Type(() => AddressPersonUpdateWithoutAddressInput)
    data!: AddressPersonUpdateWithoutAddressInput;
}
