import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutWorkshopInput } from './customer-update-without-workshop.input';
import { ValidateNested } from 'class-validator';
import { CustomerCreateWithoutWorkshopInput } from './customer-create-without-workshop.input';

@InputType()
export class CustomerUpsertWithWhereUniqueWithoutWorkshopInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>;

    @Field(() => CustomerUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutWorkshopInput)
    @ValidateNested()
    update!: CustomerUpdateWithoutWorkshopInput;

    @Field(() => CustomerCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => CustomerCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: CustomerCreateWithoutWorkshopInput;
}
