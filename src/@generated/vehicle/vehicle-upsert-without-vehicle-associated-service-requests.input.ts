import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleUpdateWithoutVehicleAssociatedServiceRequestsInput } from './vehicle-update-without-vehicle-associated-service-requests.input';
import { Type } from 'class-transformer';
import { VehicleCreateWithoutVehicleAssociatedServiceRequestsInput } from './vehicle-create-without-vehicle-associated-service-requests.input';
import { VehicleWhereInput } from './vehicle-where.input';

@InputType()
export class VehicleUpsertWithoutVehicleAssociatedServiceRequestsInput {

    @Field(() => VehicleUpdateWithoutVehicleAssociatedServiceRequestsInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutVehicleAssociatedServiceRequestsInput)
    update!: VehicleUpdateWithoutVehicleAssociatedServiceRequestsInput;

    @Field(() => VehicleCreateWithoutVehicleAssociatedServiceRequestsInput, {nullable:false})
    @Type(() => VehicleCreateWithoutVehicleAssociatedServiceRequestsInput)
    create!: VehicleCreateWithoutVehicleAssociatedServiceRequestsInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;
}
