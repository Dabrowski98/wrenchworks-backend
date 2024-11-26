import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutGuestInput } from './customer-create-without-guest.input';
import { HideField } from '@nestjs/graphql';
import { CustomerCreateOrConnectWithoutGuestInput } from './customer-create-or-connect-without-guest.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class CustomerCreateNestedOneWithoutGuestInput {

    @HideField()
    create?: CustomerCreateWithoutGuestInput;

    @HideField()
    connectOrCreate?: CustomerCreateOrConnectWithoutGuestInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>;
}
