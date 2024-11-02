import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutPersonsInput } from './address-update-without-persons.input';
import { AddressCreateWithoutPersonsInput } from './address-create-without-persons.input';

@InputType()
export class AddressUpsertWithWhereUniqueWithoutPersonsInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressUpdateWithoutPersonsInput, {nullable:false})
    @Type(() => AddressUpdateWithoutPersonsInput)
    update!: AddressUpdateWithoutPersonsInput;

    @Field(() => AddressCreateWithoutPersonsInput, {nullable:false})
    @Type(() => AddressCreateWithoutPersonsInput)
    create!: AddressCreateWithoutPersonsInput;
}
