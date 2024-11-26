import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutUserInput } from './customer-create-without-user.input';
import { HideField } from '@nestjs/graphql';
import { CustomerCreateOrConnectWithoutUserInput } from './customer-create-or-connect-without-user.input';
import { CustomerCreateManyUserInputEnvelope } from './customer-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class CustomerCreateNestedManyWithoutUserInput {

    @HideField()
    create?: Array<CustomerCreateWithoutUserInput>;

    @HideField()
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutUserInput>;

    @HideField()
    createMany?: CustomerCreateManyUserInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>>;
}
