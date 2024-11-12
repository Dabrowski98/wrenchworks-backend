import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutWorkshopInput } from './customer-update-without-workshop.input';

@InputType()
export class CustomerUpdateWithWhereUniqueWithoutWorkshopInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>;

    @Field(() => CustomerUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutWorkshopInput)
    data!: CustomerUpdateWithoutWorkshopInput;
}
