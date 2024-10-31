import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleCreateWithoutServicesInput } from './vehicle-create-without-services.input';

@InputType()
export class VehicleCreateOrConnectWithoutServicesInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleCreateWithoutServicesInput, {nullable:false})
    @Type(() => VehicleCreateWithoutServicesInput)
    create!: VehicleCreateWithoutServicesInput;
}
