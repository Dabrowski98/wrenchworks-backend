import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutVehiclesInput } from './customer-update-without-vehicles.input';

@InputType()
export class CustomerUpdateToOneWithWhereWithoutVehiclesInput {

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;

    @Field(() => CustomerUpdateWithoutVehiclesInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutVehiclesInput)
    data!: CustomerUpdateWithoutVehiclesInput;
}
