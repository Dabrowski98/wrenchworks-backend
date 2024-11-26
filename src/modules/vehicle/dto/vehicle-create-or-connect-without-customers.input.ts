import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleCreateWithoutCustomersInput } from './vehicle-create-without-customers.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleCreateOrConnectWithoutCustomersInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleCreateWithoutCustomersInput, {nullable:false})
    @Type(() => VehicleCreateWithoutCustomersInput)
    @ValidateNested()
    create!: VehicleCreateWithoutCustomersInput;
}
