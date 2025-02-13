import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VehicleModel } from '../../vehicle-model/dto/vehicle-model.model';
import { Type } from 'class-transformer';
import { VehicleBrandCount } from './vehicle-brand-count.output';

/**
 * This model represents VehicleBrand information, including brand names and related vehicle models.
 * It is used to categorize and link vehicles to their respective brands in the application.
 */
@ObjectType({description:'This model represents VehicleBrand information, including brand names and related vehicle models.\nIt is used to categorize and link vehicles to their respective brands in the application.'})
export class VehicleBrand {

    /**
     * Name of the vehicle brand
     */
    @Field(() => String, {nullable:false,description:'Name of the vehicle brand'})
    brandName!: string;

    /**
     * Timestamp of brand creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of brand creation'})
    createdAt!: Date;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last update'})
    updatedAt!: Date | null;

    /**
     * Models associated with this brand
     */
    @Field(() => [VehicleModel], {nullable:true,description:'Models associated with this brand'})
    @Type(() => VehicleModel)
    vehicleModels?: Array<VehicleModel>;

    @Field(() => VehicleBrandCount, {nullable:false})
    _count?: VehicleBrandCount;
}
