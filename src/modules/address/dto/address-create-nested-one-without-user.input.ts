import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutUserInput } from './address-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AddressCreateOrConnectWithoutUserInput } from './address-create-or-connect-without-user.input';
import { HideField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutUserInput {

    @Field(() => AddressCreateWithoutUserInput, {nullable:true})
    @Type(() => AddressCreateWithoutUserInput)
    @ValidateNested()
    create?: AddressCreateWithoutUserInput;

    }