import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleDetailsCreateWithoutVehicleInput } from './vehicle-details-create-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleDetailsCreateOrConnectWithoutVehicleInput } from './vehicle-details-create-or-connect-without-vehicle.input';
import { VehicleDetailsUpsertWithoutVehicleInput } from './vehicle-details-upsert-without-vehicle.input';
import { VehicleDetailsWhereInput } from './vehicle-details-where.input';
import { Prisma } from '@prisma/client';
import { VehicleDetailsWhereUniqueInput } from './vehicle-details-where-unique.input';
import { VehicleDetailsUpdateToOneWithWhereWithoutVehicleInput } from './vehicle-details-update-to-one-with-where-without-vehicle.input';

@InputType()
export class VehicleDetailsUpdateOneWithoutVehicleNestedInput {

    @Field(() => VehicleDetailsCreateWithoutVehicleInput, {nullable:true})
    @Type(() => VehicleDetailsCreateWithoutVehicleInput)
    @ValidateNested()
    create?: VehicleDetailsCreateWithoutVehicleInput;

    @Field(() => VehicleDetailsCreateOrConnectWithoutVehicleInput, {nullable:true})
    @Type(() => VehicleDetailsCreateOrConnectWithoutVehicleInput)
    @ValidateNested()
    connectOrCreate?: VehicleDetailsCreateOrConnectWithoutVehicleInput;

    @Field(() => VehicleDetailsUpsertWithoutVehicleInput, {nullable:true})
    @Type(() => VehicleDetailsUpsertWithoutVehicleInput)
    @ValidateNested()
    upsert?: VehicleDetailsUpsertWithoutVehicleInput;

    @Field(() => VehicleDetailsWhereInput, {nullable:true})
    @Type(() => VehicleDetailsWhereInput)
    @ValidateNested()
    disconnect?: VehicleDetailsWhereInput;

    @Field(() => VehicleDetailsWhereInput, {nullable:true})
    @Type(() => VehicleDetailsWhereInput)
    @ValidateNested()
    delete?: VehicleDetailsWhereInput;

    @Field(() => VehicleDetailsWhereUniqueInput, {nullable:true})
    @Type(() => VehicleDetailsWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<VehicleDetailsWhereUniqueInput, 'vehicleDetailsId' | 'vehicleId'>;

    @Field(() => VehicleDetailsUpdateToOneWithWhereWithoutVehicleInput, {nullable:true})
    @Type(() => VehicleDetailsUpdateToOneWithWhereWithoutVehicleInput)
    @ValidateNested()
    update?: VehicleDetailsUpdateToOneWithWhereWithoutVehicleInput;
}
