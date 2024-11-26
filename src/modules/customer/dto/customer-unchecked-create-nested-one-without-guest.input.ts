import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutGuestInput } from './customer-create-without-guest.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateOrConnectWithoutGuestInput } from './customer-create-or-connect-without-guest.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerUncheckedCreateNestedOneWithoutGuestInput {

    @Field(() => CustomerCreateWithoutGuestInput, {nullable:true})
    @Type(() => CustomerCreateWithoutGuestInput)
    @ValidateNested()
    create?: CustomerCreateWithoutGuestInput;

    @Field(() => CustomerCreateOrConnectWithoutGuestInput, {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutGuestInput)
    @ValidateNested()
    connectOrCreate?: CustomerCreateOrConnectWithoutGuestInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>;
}
