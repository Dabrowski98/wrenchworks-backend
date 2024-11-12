import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleBrandWhereInput } from './vehicle-brand-where.input';

@InputType()
export class VehicleBrandRelationFilter {

    @Field(() => VehicleBrandWhereInput, {nullable:true})
    is?: VehicleBrandWhereInput;

    @Field(() => VehicleBrandWhereInput, {nullable:true})
    isNot?: VehicleBrandWhereInput;
}
