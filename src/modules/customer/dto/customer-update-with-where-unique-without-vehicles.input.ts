import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutVehiclesInput } from './customer-update-without-vehicles.input';

@InputType()
export class CustomerUpdateWithWhereUniqueWithoutVehiclesInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>;

    @Field(() => CustomerUpdateWithoutVehiclesInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutVehiclesInput)
    data!: CustomerUpdateWithoutVehiclesInput;
}
