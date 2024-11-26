import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutGuestInput } from './customer-create-without-guest.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class CustomerCreateOrConnectWithoutGuestInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>;

    @Field(() => CustomerCreateWithoutGuestInput, {nullable:false})
    @Type(() => CustomerCreateWithoutGuestInput)
    @ValidateNested()
    create!: CustomerCreateWithoutGuestInput;
}
