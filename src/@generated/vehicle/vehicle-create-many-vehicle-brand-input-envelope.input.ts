import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateManyVehicleBrandInput } from './vehicle-create-many-vehicle-brand.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleCreateManyVehicleBrandInputEnvelope {

    @Field(() => [VehicleCreateManyVehicleBrandInput], {nullable:false})
    @Type(() => VehicleCreateManyVehicleBrandInput)
    data!: Array<VehicleCreateManyVehicleBrandInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
