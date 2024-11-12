import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutPersonInput } from './vehicle-update-without-person.input';

@InputType()
export class VehicleUpdateWithWhereUniqueWithoutPersonInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleUpdateWithoutPersonInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutPersonInput)
    data!: VehicleUpdateWithoutPersonInput;
}
