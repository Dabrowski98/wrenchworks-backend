import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutPersonsInput } from './address-create-without-persons.input';
import * as Validator from 'class-validator';
import { AddressCreateInput } from './address-create.input';

@InputType()
export class AddressCreateOrConnectWithoutPersonsInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressCreateInput, {nullable:false})
    @Type(() => AddressCreateInput)
    @Validator.ValidateNested()
    create!: AddressCreateInput;
}
