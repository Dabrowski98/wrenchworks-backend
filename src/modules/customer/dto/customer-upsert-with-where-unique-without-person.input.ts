import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutPersonInput } from './customer-update-without-person.input';
import { CustomerCreateWithoutPersonInput } from './customer-create-without-person.input';

@InputType()
export class CustomerUpsertWithWhereUniqueWithoutPersonInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>;

    @Field(() => CustomerUpdateWithoutPersonInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutPersonInput)
    update!: CustomerUpdateWithoutPersonInput;

    @Field(() => CustomerCreateWithoutPersonInput, {nullable:false})
    @Type(() => CustomerCreateWithoutPersonInput)
    create!: CustomerCreateWithoutPersonInput;
}
