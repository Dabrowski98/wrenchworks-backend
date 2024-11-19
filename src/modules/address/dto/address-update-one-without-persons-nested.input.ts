import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutPersonsInput } from './address-create-without-persons.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutPersonsInput } from './address-create-or-connect-without-persons.input';
import { AddressUpsertWithoutPersonsInput } from './address-upsert-without-persons.input';
import { AddressWhereInput } from './address-where.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutPersonsInput } from './address-update-to-one-with-where-without-persons.input';
import { AddressCreateInput } from './address-create.input';
import * as Validator from 'class-validator';

@InputType()
export class AddressUpdateOneWithoutPersonsNestedInput {

    @Field(() => AddressCreateInput, {nullable:true})
    @Type(() => AddressCreateInput)
    @Validator.IsOptional()
    @Validator.ValidateNested()
    create?: AddressCreateInput;

}
