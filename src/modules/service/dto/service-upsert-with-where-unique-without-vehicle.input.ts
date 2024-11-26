import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceUpdateWithoutVehicleInput } from './service-update-without-vehicle.input';
import { ValidateNested } from 'class-validator';
import { ServiceCreateWithoutVehicleInput } from './service-create-without-vehicle.input';

@InputType()
export class ServiceUpsertWithWhereUniqueWithoutVehicleInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceUpdateWithoutVehicleInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutVehicleInput)
    @ValidateNested()
    update!: ServiceUpdateWithoutVehicleInput;

    @Field(() => ServiceCreateWithoutVehicleInput, {nullable:false})
    @Type(() => ServiceCreateWithoutVehicleInput)
    @ValidateNested()
    create!: ServiceCreateWithoutVehicleInput;
}
