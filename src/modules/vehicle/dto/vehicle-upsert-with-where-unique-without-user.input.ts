import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutUserInput } from './vehicle-update-without-user.input';
import { ValidateNested } from 'class-validator';
import { VehicleCreateWithoutUserInput } from './vehicle-create-without-user.input';

@InputType()
export class VehicleUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleUpdateWithoutUserInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutUserInput)
    @ValidateNested()
    update!: VehicleUpdateWithoutUserInput;

    @Field(() => VehicleCreateWithoutUserInput, {nullable:false})
    @Type(() => VehicleCreateWithoutUserInput)
    @ValidateNested()
    create!: VehicleCreateWithoutUserInput;
}
