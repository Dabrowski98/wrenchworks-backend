import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelCreateManyVehicleBrandInput } from './vehicle-model-create-many-vehicle-brand.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleModelCreateManyVehicleBrandInputEnvelope {

    @Field(() => [VehicleModelCreateManyVehicleBrandInput], {nullable:false})
    @Type(() => VehicleModelCreateManyVehicleBrandInput)
    data!: Array<VehicleModelCreateManyVehicleBrandInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
