import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutGuestInput } from './customer-create-without-guest.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateOrConnectWithoutGuestInput } from './customer-create-or-connect-without-guest.input';
import { CustomerUpsertWithoutGuestInput } from './customer-upsert-without-guest.input';
import { CustomerWhereInput } from './customer-where.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateToOneWithWhereWithoutGuestInput } from './customer-update-to-one-with-where-without-guest.input';

@InputType()
export class CustomerUpdateOneWithoutGuestNestedInput {

    @Field(() => CustomerCreateWithoutGuestInput, {nullable:true})
    @Type(() => CustomerCreateWithoutGuestInput)
    @ValidateNested()
    create?: CustomerCreateWithoutGuestInput;

    @Field(() => CustomerCreateOrConnectWithoutGuestInput, {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutGuestInput)
    @ValidateNested()
    connectOrCreate?: CustomerCreateOrConnectWithoutGuestInput;

    @Field(() => CustomerUpsertWithoutGuestInput, {nullable:true})
    @Type(() => CustomerUpsertWithoutGuestInput)
    @ValidateNested()
    upsert?: CustomerUpsertWithoutGuestInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    @ValidateNested()
    disconnect?: CustomerWhereInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    @ValidateNested()
    delete?: CustomerWhereInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>;

    @Field(() => CustomerUpdateToOneWithWhereWithoutGuestInput, {nullable:true})
    @Type(() => CustomerUpdateToOneWithWhereWithoutGuestInput)
    @ValidateNested()
    update?: CustomerUpdateToOneWithWhereWithoutGuestInput;
}
