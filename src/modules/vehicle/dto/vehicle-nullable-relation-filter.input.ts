import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';

@InputType()
export class VehicleNullableRelationFilter {

    @Field(() => VehicleWhereInput, {nullable:true})
    is?: VehicleWhereInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    isNot?: VehicleWhereInput;
}
