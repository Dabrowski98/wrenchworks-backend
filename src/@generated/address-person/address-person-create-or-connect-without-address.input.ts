import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';
import { Type } from 'class-transformer';
import { AddressPersonCreateWithoutAddressInput } from './address-person-create-without-address.input';

@InputType()
export class AddressPersonCreateOrConnectWithoutAddressInput {

    @Field(() => AddressPersonWhereUniqueInput, {nullable:false})
    @Type(() => AddressPersonWhereUniqueInput)
    where!: Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>;

    @Field(() => AddressPersonCreateWithoutAddressInput, {nullable:false})
    @Type(() => AddressPersonCreateWithoutAddressInput)
    create!: AddressPersonCreateWithoutAddressInput;
}
