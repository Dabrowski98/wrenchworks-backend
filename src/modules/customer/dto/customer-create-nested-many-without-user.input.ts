import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutUserInput } from './customer-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateOrConnectWithoutUserInput } from './customer-create-or-connect-without-user.input';
import { CustomerCreateManyUserInputEnvelope } from './customer-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedManyWithoutUserInput {

    @Field(() => [CustomerCreateWithoutUserInput], {nullable:true})
    @Type(() => CustomerCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<CustomerCreateWithoutUserInput>;

    @Field(() => [CustomerCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutUserInput>;

    @Field(() => CustomerCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CustomerCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: CustomerCreateManyUserInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>>;
}
