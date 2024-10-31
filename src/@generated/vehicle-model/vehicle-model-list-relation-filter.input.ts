import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelWhereInput } from './vehicle-model-where.input';

@InputType()
export class VehicleModelListRelationFilter {

    @Field(() => VehicleModelWhereInput, {nullable:true})
    every?: VehicleModelWhereInput;

    @Field(() => VehicleModelWhereInput, {nullable:true})
    some?: VehicleModelWhereInput;

    @Field(() => VehicleModelWhereInput, {nullable:true})
    none?: VehicleModelWhereInput;
}
