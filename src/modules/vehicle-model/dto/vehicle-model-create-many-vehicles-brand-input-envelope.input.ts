import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelCreateManyVehiclesBrandInput } from './vehicle-model-create-many-vehicles-brand.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleModelCreateManyVehiclesBrandInputEnvelope {

    @Field(() => [VehicleModelCreateManyVehiclesBrandInput], {nullable:false})
    @Type(() => VehicleModelCreateManyVehiclesBrandInput)
    data!: Array<VehicleModelCreateManyVehiclesBrandInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
