import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutUserInput } from './customer-update-without-user.input';
import { ValidateNested } from 'class-validator';
import { CustomerCreateWithoutUserInput } from './customer-create-without-user.input';

@InputType()
export class CustomerUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>;

    @Field(() => CustomerUpdateWithoutUserInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutUserInput)
    @ValidateNested()
    update!: CustomerUpdateWithoutUserInput;

    @Field(() => CustomerCreateWithoutUserInput, {nullable:false})
    @Type(() => CustomerCreateWithoutUserInput)
    @ValidateNested()
    create!: CustomerCreateWithoutUserInput;
}
