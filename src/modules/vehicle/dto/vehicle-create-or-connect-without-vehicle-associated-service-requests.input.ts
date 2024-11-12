import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleCreateWithoutVehicleAssociatedServiceRequestsInput } from './vehicle-create-without-vehicle-associated-service-requests.input';

@InputType()
export class VehicleCreateOrConnectWithoutVehicleAssociatedServiceRequestsInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleCreateWithoutVehicleAssociatedServiceRequestsInput, {nullable:false})
    @Type(() => VehicleCreateWithoutVehicleAssociatedServiceRequestsInput)
    create!: VehicleCreateWithoutVehicleAssociatedServiceRequestsInput;
}
