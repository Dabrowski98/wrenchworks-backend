import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerUpdateWithoutVehiclesInput } from './customer-update-without-vehicles.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateWithoutVehiclesInput } from './customer-create-without-vehicles.input';
import { CustomerWhereInput } from './customer-where.input';

@InputType()
export class CustomerUpsertWithoutVehiclesInput {

    @Field(() => CustomerUpdateWithoutVehiclesInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutVehiclesInput)
    @ValidateNested()
    update!: CustomerUpdateWithoutVehiclesInput;

    @Field(() => CustomerCreateWithoutVehiclesInput, {nullable:false})
    @Type(() => CustomerCreateWithoutVehiclesInput)
    @ValidateNested()
    create!: CustomerCreateWithoutVehiclesInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;
}
