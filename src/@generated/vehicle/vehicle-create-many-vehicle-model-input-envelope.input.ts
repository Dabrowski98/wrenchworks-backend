import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateManyVehicleModelInput } from './vehicle-create-many-vehicle-model.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleCreateManyVehicleModelInputEnvelope {

    @Field(() => [VehicleCreateManyVehicleModelInput], {nullable:false})
    @Type(() => VehicleCreateManyVehicleModelInput)
    data!: Array<VehicleCreateManyVehicleModelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
