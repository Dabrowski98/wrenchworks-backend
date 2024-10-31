import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleDetailsWhereInput } from './vehicle-details-where.input';

@InputType()
export class VehicleDetailsNullableRelationFilter {

    @Field(() => VehicleDetailsWhereInput, {nullable:true})
    is?: VehicleDetailsWhereInput;

    @Field(() => VehicleDetailsWhereInput, {nullable:true})
    isNot?: VehicleDetailsWhereInput;
}
