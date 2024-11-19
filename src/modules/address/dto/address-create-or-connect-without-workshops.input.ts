import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutWorkshopsInput } from './address-create-without-workshops.input';
import { AddressCreateInput } from './address-create.input';
import * as Validator from 'class-validator'

@InputType()
export class AddressCreateOrConnectWithoutWorkshopsInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressCreateInput, {nullable:false})
    @Type(() => AddressCreateInput)
    @Validator.ValidateNested()
    @Validator.IsNotEmpty()
    create!: AddressCreateInput;
}
