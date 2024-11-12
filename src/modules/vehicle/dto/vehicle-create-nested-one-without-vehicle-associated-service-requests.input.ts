import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehicleAssociatedServiceRequestsInput } from './vehicle-create-without-vehicle-associated-service-requests.input';
import { Type } from 'class-transformer';
import { VehicleCreateOrConnectWithoutVehicleAssociatedServiceRequestsInput } from './vehicle-create-or-connect-without-vehicle-associated-service-requests.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleCreateNestedOneWithoutVehicleAssociatedServiceRequestsInput {

    @Field(() => VehicleCreateWithoutVehicleAssociatedServiceRequestsInput, {nullable:true})
    @Type(() => VehicleCreateWithoutVehicleAssociatedServiceRequestsInput)
    create?: VehicleCreateWithoutVehicleAssociatedServiceRequestsInput;

    @Field(() => VehicleCreateOrConnectWithoutVehicleAssociatedServiceRequestsInput, {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutVehicleAssociatedServiceRequestsInput)
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleAssociatedServiceRequestsInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;
}
