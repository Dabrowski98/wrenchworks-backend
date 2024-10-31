import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehicleAssociatedServiceRequestsInput } from './vehicle-create-without-vehicle-associated-service-requests.input';
import { Type } from 'class-transformer';
import { VehicleCreateOrConnectWithoutVehicleAssociatedServiceRequestsInput } from './vehicle-create-or-connect-without-vehicle-associated-service-requests.input';
import { VehicleUpsertWithoutVehicleAssociatedServiceRequestsInput } from './vehicle-upsert-without-vehicle-associated-service-requests.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateToOneWithWhereWithoutVehicleAssociatedServiceRequestsInput } from './vehicle-update-to-one-with-where-without-vehicle-associated-service-requests.input';

@InputType()
export class VehicleUpdateOneRequiredWithoutVehicleAssociatedServiceRequestsNestedInput {

    @Field(() => VehicleCreateWithoutVehicleAssociatedServiceRequestsInput, {nullable:true})
    @Type(() => VehicleCreateWithoutVehicleAssociatedServiceRequestsInput)
    create?: VehicleCreateWithoutVehicleAssociatedServiceRequestsInput;

    @Field(() => VehicleCreateOrConnectWithoutVehicleAssociatedServiceRequestsInput, {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutVehicleAssociatedServiceRequestsInput)
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleAssociatedServiceRequestsInput;

    @Field(() => VehicleUpsertWithoutVehicleAssociatedServiceRequestsInput, {nullable:true})
    @Type(() => VehicleUpsertWithoutVehicleAssociatedServiceRequestsInput)
    upsert?: VehicleUpsertWithoutVehicleAssociatedServiceRequestsInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleUpdateToOneWithWhereWithoutVehicleAssociatedServiceRequestsInput, {nullable:true})
    @Type(() => VehicleUpdateToOneWithWhereWithoutVehicleAssociatedServiceRequestsInput)
    update?: VehicleUpdateToOneWithWhereWithoutVehicleAssociatedServiceRequestsInput;
}
