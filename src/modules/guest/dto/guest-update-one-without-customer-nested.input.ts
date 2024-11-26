import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestCreateWithoutCustomerInput } from './guest-create-without-customer.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GuestCreateOrConnectWithoutCustomerInput } from './guest-create-or-connect-without-customer.input';
import { GuestUpsertWithoutCustomerInput } from './guest-upsert-without-customer.input';
import { GuestWhereInput } from './guest-where.input';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { GuestUpdateToOneWithWhereWithoutCustomerInput } from './guest-update-to-one-with-where-without-customer.input';

@InputType()
export class GuestUpdateOneWithoutCustomerNestedInput {

    @Field(() => GuestCreateWithoutCustomerInput, {nullable:true})
    @Type(() => GuestCreateWithoutCustomerInput)
    @ValidateNested()
    create?: GuestCreateWithoutCustomerInput;

    @Field(() => GuestCreateOrConnectWithoutCustomerInput, {nullable:true})
    @Type(() => GuestCreateOrConnectWithoutCustomerInput)
    @ValidateNested()
    connectOrCreate?: GuestCreateOrConnectWithoutCustomerInput;

    @Field(() => GuestUpsertWithoutCustomerInput, {nullable:true})
    @Type(() => GuestUpsertWithoutCustomerInput)
    @ValidateNested()
    upsert?: GuestUpsertWithoutCustomerInput;

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    @ValidateNested()
    disconnect?: GuestWhereInput;

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    @ValidateNested()
    delete?: GuestWhereInput;

    @Field(() => GuestWhereUniqueInput, {nullable:true})
    @Type(() => GuestWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;

    @Field(() => GuestUpdateToOneWithWhereWithoutCustomerInput, {nullable:true})
    @Type(() => GuestUpdateToOneWithWhereWithoutCustomerInput)
    @ValidateNested()
    update?: GuestUpdateToOneWithWhereWithoutCustomerInput;
}
