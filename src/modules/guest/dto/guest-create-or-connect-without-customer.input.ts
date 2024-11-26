import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { Type } from 'class-transformer';
import { GuestCreateWithoutCustomerInput } from './guest-create-without-customer.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class GuestCreateOrConnectWithoutCustomerInput {

    @Field(() => GuestWhereUniqueInput, {nullable:false})
    @Type(() => GuestWhereUniqueInput)
    where!: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;

    @Field(() => GuestCreateWithoutCustomerInput, {nullable:false})
    @Type(() => GuestCreateWithoutCustomerInput)
    @ValidateNested()
    create!: GuestCreateWithoutCustomerInput;
}
