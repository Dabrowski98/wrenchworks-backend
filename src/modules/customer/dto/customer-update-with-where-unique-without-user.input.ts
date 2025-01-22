import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutUserInput } from './customer-update-without-user.input';

@InputType()
export class CustomerUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>;

    @Field(() => CustomerUpdateWithoutUserInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutUserInput)
    data!: CustomerUpdateWithoutUserInput;
}
