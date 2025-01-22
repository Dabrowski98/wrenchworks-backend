import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutUserInput } from './customer-create-without-user.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class CustomerCreateOrConnectWithoutUserInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>;

    @Field(() => CustomerCreateWithoutUserInput, {nullable:false})
    @Type(() => CustomerCreateWithoutUserInput)
    @ValidateNested()
    create!: CustomerCreateWithoutUserInput;
}
