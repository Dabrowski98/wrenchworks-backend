import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutVehicleInput } from './service-create-without-vehicle.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceCreateOrConnectWithoutVehicleInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceCreateWithoutVehicleInput, {nullable:false})
    @Type(() => ServiceCreateWithoutVehicleInput)
    @ValidateNested()
    create!: ServiceCreateWithoutVehicleInput;
}
