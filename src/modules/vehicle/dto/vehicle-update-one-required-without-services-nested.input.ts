import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutServicesInput } from './vehicle-create-without-services.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutServicesInput } from './vehicle-create-or-connect-without-services.input';
import { VehicleUpsertWithoutServicesInput } from './vehicle-upsert-without-services.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateToOneWithWhereWithoutServicesInput } from './vehicle-update-to-one-with-where-without-services.input';

@InputType()
export class VehicleUpdateOneRequiredWithoutServicesNestedInput {

    @Field(() => VehicleCreateWithoutServicesInput, {nullable:true})
    @Type(() => VehicleCreateWithoutServicesInput)
    @ValidateNested()
    create?: VehicleCreateWithoutServicesInput;

    @Field(() => VehicleCreateOrConnectWithoutServicesInput, {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutServicesInput)
    @ValidateNested()
    connectOrCreate?: VehicleCreateOrConnectWithoutServicesInput;

    @Field(() => VehicleUpsertWithoutServicesInput, {nullable:true})
    @Type(() => VehicleUpsertWithoutServicesInput)
    @ValidateNested()
    upsert?: VehicleUpsertWithoutServicesInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleUpdateToOneWithWhereWithoutServicesInput, {nullable:true})
    @Type(() => VehicleUpdateToOneWithWhereWithoutServicesInput)
    @ValidateNested()
    update?: VehicleUpdateToOneWithWhereWithoutServicesInput;
}
