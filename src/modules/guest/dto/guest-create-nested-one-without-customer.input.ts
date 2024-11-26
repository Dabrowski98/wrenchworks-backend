import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestCreateWithoutCustomerInput } from './guest-create-without-customer.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GuestCreateOrConnectWithoutCustomerInput } from './guest-create-or-connect-without-customer.input';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';

@InputType()
export class GuestCreateNestedOneWithoutCustomerInput {

    @Field(() => GuestCreateWithoutCustomerInput, {nullable:true})
    @Type(() => GuestCreateWithoutCustomerInput)
    @ValidateNested()
    create?: GuestCreateWithoutCustomerInput;

    @Field(() => GuestCreateOrConnectWithoutCustomerInput, {nullable:true})
    @Type(() => GuestCreateOrConnectWithoutCustomerInput)
    @ValidateNested()
    connectOrCreate?: GuestCreateOrConnectWithoutCustomerInput;

    @Field(() => GuestWhereUniqueInput, {nullable:true})
    @Type(() => GuestWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;
}
