import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutPersonInput } from './vehicle-update-without-person.input';
import { VehicleCreateWithoutPersonInput } from './vehicle-create-without-person.input';

@InputType()
export class VehicleUpsertWithWhereUniqueWithoutPersonInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleUpdateWithoutPersonInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutPersonInput)
    update!: VehicleUpdateWithoutPersonInput;

    @Field(() => VehicleCreateWithoutPersonInput, {nullable:false})
    @Type(() => VehicleCreateWithoutPersonInput)
    create!: VehicleCreateWithoutPersonInput;
}
