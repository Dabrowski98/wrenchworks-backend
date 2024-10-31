import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutVehicleAssociatedServiceRequestsInput } from './vehicle-update-without-vehicle-associated-service-requests.input';

@InputType()
export class VehicleUpdateToOneWithWhereWithoutVehicleAssociatedServiceRequestsInput {

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;

    @Field(() => VehicleUpdateWithoutVehicleAssociatedServiceRequestsInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutVehicleAssociatedServiceRequestsInput)
    data!: VehicleUpdateWithoutVehicleAssociatedServiceRequestsInput;
}
