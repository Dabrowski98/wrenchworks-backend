import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutUserInput } from './vehicle-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutUserInput } from './vehicle-create-or-connect-without-user.input';
import { VehicleCreateManyUserInputEnvelope } from './vehicle-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [VehicleCreateWithoutUserInput], {nullable:true})
    @Type(() => VehicleCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<VehicleCreateWithoutUserInput>;

    @Field(() => [VehicleCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutUserInput>;

    @Field(() => VehicleCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VehicleCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: VehicleCreateManyUserInputEnvelope;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>>;
}
