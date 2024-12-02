import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutWorkshopInput } from './address-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AddressCreateOrConnectWithoutWorkshopInput } from './address-create-or-connect-without-workshop.input';
import { HideField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutWorkshopInput {

    @Field(() => AddressCreateWithoutWorkshopInput, {nullable:true})
    @Type(() => AddressCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: AddressCreateWithoutWorkshopInput;

    }