import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';
import { Type } from 'class-transformer';
import { AddressPersonUpdateWithoutAddressInput } from './address-person-update-without-address.input';
import { AddressPersonCreateWithoutAddressInput } from './address-person-create-without-address.input';

@InputType()
export class AddressPersonUpsertWithWhereUniqueWithoutAddressInput {

    @Field(() => AddressPersonWhereUniqueInput, {nullable:false})
    @Type(() => AddressPersonWhereUniqueInput)
    where!: Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>;

    @Field(() => AddressPersonUpdateWithoutAddressInput, {nullable:false})
    @Type(() => AddressPersonUpdateWithoutAddressInput)
    update!: AddressPersonUpdateWithoutAddressInput;

    @Field(() => AddressPersonCreateWithoutAddressInput, {nullable:false})
    @Type(() => AddressPersonCreateWithoutAddressInput)
    create!: AddressPersonCreateWithoutAddressInput;
}
