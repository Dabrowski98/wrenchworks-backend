import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerUpdateInput } from './customer-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneCustomerArgs {

    @Field(() => CustomerUpdateInput, {nullable:false})
    @Type(() => CustomerUpdateInput)
    @Validator.ValidateNested()
    data!: CustomerUpdateInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>;
}
