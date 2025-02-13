import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
import { Type } from 'class-transformer';
import { VehicleBrand } from '../../vehicle-brand/dto/vehicle-brand.model';
import { VehicleModelCount } from './vehicle-model-count.output';

/**
 * The VehicleModel model defines specific vehicle models along with the associated brand.
 * It contains details like model name and is used to establish relationships with individual vehicles.
 */
@ObjectType({description:'The VehicleModel model defines specific vehicle models along with the associated brand.\nIt contains details like model name and is used to establish relationships with individual vehicles.'})
export class VehicleModel {

    /**
     * Identifier of the vehicle model
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the vehicle model'})
    modelId!: bigint;

    /**
     * Name of the vehicle model
     */
    @Field(() => String, {nullable:false,description:'Name of the vehicle model'})
    modelName!: string;

    /**
     * Brand name of the vehicle model
     */
    @Field(() => String, {nullable:false,description:'Brand name of the vehicle model'})
    brand!: string;

    /**
     * Timestamp of model creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of model creation'})
    createdAt!: Date;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last update'})
    updatedAt!: Date | null;

    /**
     * Vehicles of this model
     */
    @Field(() => [Vehicle], {nullable:true,description:'Vehicles of this model'})
    @Type(() => Vehicle)
    vehicles?: Array<Vehicle>;

    /**
     * Brand associated with this model
     */
    @Field(() => VehicleBrand, {nullable:false,description:'Brand associated with this model'})
    @Type(() => VehicleBrand)
    vehicleBrand?: VehicleBrand;

    @Field(() => VehicleModelCount, {nullable:false})
    _count?: VehicleModelCount;
}
