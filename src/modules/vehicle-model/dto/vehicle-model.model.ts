import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
import { VehicleBrand } from '../../vehicle-brand/dto/vehicle-brand.model';
import { VehicleModelCount } from './vehicle-model-count.output';

@ObjectType()
export class VehicleModel {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    modelId!: bigint;

    @Field(() => String, {nullable:false})
    modelName!: string;

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => [Vehicle], {nullable:true})
    vehicles?: Array<Vehicle>;

    @Field(() => VehicleBrand, {nullable:false})
    vehiclesBrand?: VehicleBrand;

    @Field(() => VehicleModelCount, {nullable:false})
    _count?: VehicleModelCount;
}
