import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutServiceRequestsInput } from './vehicle-create-without-service-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutServiceRequestsInput } from './vehicle-create-or-connect-without-service-requests.input';
import { VehicleUpsertWithoutServiceRequestsInput } from './vehicle-upsert-without-service-requests.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateToOneWithWhereWithoutServiceRequestsInput } from './vehicle-update-to-one-with-where-without-service-requests.input';

@InputType()
export class VehicleUpdateOneRequiredWithoutServiceRequestsNestedInput {

    @Field(() => VehicleCreateWithoutServiceRequestsInput, {nullable:true})
    @Type(() => VehicleCreateWithoutServiceRequestsInput)
    @ValidateNested()
    create?: VehicleCreateWithoutServiceRequestsInput;

    @Field(() => VehicleCreateOrConnectWithoutServiceRequestsInput, {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutServiceRequestsInput)
    @ValidateNested()
    connectOrCreate?: VehicleCreateOrConnectWithoutServiceRequestsInput;

    @Field(() => VehicleUpsertWithoutServiceRequestsInput, {nullable:true})
    @Type(() => VehicleUpsertWithoutServiceRequestsInput)
    @ValidateNested()
    upsert?: VehicleUpsertWithoutServiceRequestsInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleUpdateToOneWithWhereWithoutServiceRequestsInput, {nullable:true})
    @Type(() => VehicleUpdateToOneWithWhereWithoutServiceRequestsInput)
    @ValidateNested()
    update?: VehicleUpdateToOneWithWhereWithoutServiceRequestsInput;
}
