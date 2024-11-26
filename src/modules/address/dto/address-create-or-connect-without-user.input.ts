import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutUserInput } from './address-create-without-user.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class AddressCreateOrConnectWithoutUserInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressCreateWithoutUserInput, {nullable:false})
    @Type(() => AddressCreateWithoutUserInput)
    @ValidateNested()
    create!: AddressCreateWithoutUserInput;
}
