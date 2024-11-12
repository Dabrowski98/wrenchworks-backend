import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';

@InputType()
export class VehicleListRelationFilter {

    @Field(() => VehicleWhereInput, {nullable:true})
    every?: VehicleWhereInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    some?: VehicleWhereInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    none?: VehicleWhereInput;
}
