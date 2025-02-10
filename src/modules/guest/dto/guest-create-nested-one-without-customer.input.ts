import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestCreateWithoutCustomerInput } from './guest-create-without-customer.input';
import { HideField } from '@nestjs/graphql';
import { GuestCreateOrConnectWithoutCustomerInput } from './guest-create-or-connect-without-customer.input';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class GuestCreateNestedOneWithoutCustomerInput {

    @HideField()
    create?: GuestCreateWithoutCustomerInput;

    @HideField()
    connectOrCreate?: GuestCreateOrConnectWithoutCustomerInput;

    @Field(() => GuestWhereUniqueInput, {nullable:true})
    @Type(() => GuestWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;
}
