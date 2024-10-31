import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleCreateWithoutPersonInput } from './vehicle-create-without-person.input';

@InputType()
export class VehicleCreateOrConnectWithoutPersonInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleCreateWithoutPersonInput, {nullable:false})
    @Type(() => VehicleCreateWithoutPersonInput)
    create!: VehicleCreateWithoutPersonInput;
}
