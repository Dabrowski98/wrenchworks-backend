import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelWhereInput } from './vehicle-model-where.input';

@InputType()
export class VehicleModelRelationFilter {

    @Field(() => VehicleModelWhereInput, {nullable:true})
    is?: VehicleModelWhereInput;

    @Field(() => VehicleModelWhereInput, {nullable:true})
    isNot?: VehicleModelWhereInput;
}
