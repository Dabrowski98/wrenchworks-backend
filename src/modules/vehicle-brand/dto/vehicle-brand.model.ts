import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VehicleModel } from '../../vehicle-model/dto/vehicle-model.model';
import { Type } from 'class-transformer';
import { VehicleBrandCount } from './vehicle-brand-count.output';

@ObjectType()
export class VehicleBrand {

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => [VehicleModel], {nullable:true})
    @Type(() => VehicleModel)
    vehicleModels?: Array<VehicleModel>;

    @Field(() => VehicleBrandCount, {nullable:false})
    _count?: VehicleBrandCount;
}
