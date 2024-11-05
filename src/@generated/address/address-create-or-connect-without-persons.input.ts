import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutPersonsInput } from './address-create-without-persons.input';

@InputType()
export class AddressCreateOrConnectWithoutPersonsInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressCreateWithoutPersonsInput, {nullable:false})
    @Type(() => AddressCreateWithoutPersonsInput)
    create!: AddressCreateWithoutPersonsInput;
}
