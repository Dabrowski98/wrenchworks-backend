import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehicleDetailsInput } from './vehicle-create-without-vehicle-details.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutVehicleDetailsInput } from './vehicle-create-or-connect-without-vehicle-details.input';
import { VehicleUpsertWithoutVehicleDetailsInput } from './vehicle-upsert-without-vehicle-details.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateToOneWithWhereWithoutVehicleDetailsInput } from './vehicle-update-to-one-with-where-without-vehicle-details.input';

@InputType()
export class VehicleUpdateOneRequiredWithoutVehicleDetailsNestedInput {

    @Field(() => VehicleCreateWithoutVehicleDetailsInput, {nullable:true})
    @Type(() => VehicleCreateWithoutVehicleDetailsInput)
    @ValidateNested()
    create?: VehicleCreateWithoutVehicleDetailsInput;

    @Field(() => VehicleCreateOrConnectWithoutVehicleDetailsInput, {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutVehicleDetailsInput)
    @ValidateNested()
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleDetailsInput;

    @Field(() => VehicleUpsertWithoutVehicleDetailsInput, {nullable:true})
    @Type(() => VehicleUpsertWithoutVehicleDetailsInput)
    @ValidateNested()
    upsert?: VehicleUpsertWithoutVehicleDetailsInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleUpdateToOneWithWhereWithoutVehicleDetailsInput, {nullable:true})
    @Type(() => VehicleUpdateToOneWithWhereWithoutVehicleDetailsInput)
    @ValidateNested()
    update?: VehicleUpdateToOneWithWhereWithoutVehicleDetailsInput;
}
