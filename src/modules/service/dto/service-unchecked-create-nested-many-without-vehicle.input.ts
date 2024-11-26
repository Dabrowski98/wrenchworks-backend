import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutVehicleInput } from './service-create-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceCreateOrConnectWithoutVehicleInput } from './service-create-or-connect-without-vehicle.input';
import { ServiceCreateManyVehicleInputEnvelope } from './service-create-many-vehicle-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceUncheckedCreateNestedManyWithoutVehicleInput {

    @Field(() => [ServiceCreateWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceCreateWithoutVehicleInput)
    @ValidateNested()
    create?: Array<ServiceCreateWithoutVehicleInput>;

    @Field(() => [ServiceCreateOrConnectWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutVehicleInput)
    @ValidateNested()
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutVehicleInput>;

    @Field(() => ServiceCreateManyVehicleInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyVehicleInputEnvelope)
    @ValidateNested()
    createMany?: ServiceCreateManyVehicleInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;
}
