import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Vehicle } from '../vehicle/vehicle.model';
import { VehicleModel } from '../vehicle-model/vehicle-model.model';
import { VehicleBrandCount } from './vehicle-brand-count.output';

@ObjectType()
export class VehicleBrand {

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => [Vehicle], {nullable:true})
    vehicles?: Array<Vehicle>;

    @Field(() => [VehicleModel], {nullable:true})
    vehicleModels?: Array<VehicleModel>;

    @Field(() => VehicleBrandCount, {nullable:false})
    _count?: VehicleBrandCount;
}
