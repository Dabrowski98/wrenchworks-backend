import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VehicleModel } from '../../vehicle-model/dto/vehicle-model.model';
import { Type } from 'class-transformer';
import { VehicleBrandCount } from './vehicle-brand-count.output';

@ObjectType()
export class VehicleBrand {

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [VehicleModel], {nullable:true})
    @Type(() => VehicleModel)
    vehicleModels?: Array<VehicleModel>;

    @Field(() => VehicleBrandCount, {nullable:false})
    _count?: VehicleBrandCount;
}
