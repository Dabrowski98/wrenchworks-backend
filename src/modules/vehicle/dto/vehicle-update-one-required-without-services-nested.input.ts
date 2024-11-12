import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutServicesInput } from './vehicle-create-without-services.input';
import { Type } from 'class-transformer';
import { VehicleCreateOrConnectWithoutServicesInput } from './vehicle-create-or-connect-without-services.input';
import { VehicleUpsertWithoutServicesInput } from './vehicle-upsert-without-services.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateToOneWithWhereWithoutServicesInput } from './vehicle-update-to-one-with-where-without-services.input';

@InputType()
export class VehicleUpdateOneRequiredWithoutServicesNestedInput {

    @Field(() => VehicleCreateWithoutServicesInput, {nullable:true})
    @Type(() => VehicleCreateWithoutServicesInput)
    create?: VehicleCreateWithoutServicesInput;

    @Field(() => VehicleCreateOrConnectWithoutServicesInput, {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutServicesInput)
    connectOrCreate?: VehicleCreateOrConnectWithoutServicesInput;

    @Field(() => VehicleUpsertWithoutServicesInput, {nullable:true})
    @Type(() => VehicleUpsertWithoutServicesInput)
    upsert?: VehicleUpsertWithoutServicesInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleUpdateToOneWithWhereWithoutServicesInput, {nullable:true})
    @Type(() => VehicleUpdateToOneWithWhereWithoutServicesInput)
    update?: VehicleUpdateToOneWithWhereWithoutServicesInput;
}
