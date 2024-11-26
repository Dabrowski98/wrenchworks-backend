import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutWorkshopInput } from './address-create-without-workshop.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class AddressCreateOrConnectWithoutWorkshopInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => AddressCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: AddressCreateWithoutWorkshopInput;
}
