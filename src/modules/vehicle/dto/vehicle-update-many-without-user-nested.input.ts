import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutUserInput } from './vehicle-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutUserInput } from './vehicle-create-or-connect-without-user.input';
import { VehicleUpsertWithWhereUniqueWithoutUserInput } from './vehicle-upsert-with-where-unique-without-user.input';
import { VehicleCreateManyUserInputEnvelope } from './vehicle-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateWithWhereUniqueWithoutUserInput } from './vehicle-update-with-where-unique-without-user.input';
import { VehicleUpdateManyWithWhereWithoutUserInput } from './vehicle-update-many-with-where-without-user.input';
import { VehicleScalarWhereInput } from './vehicle-scalar-where.input';

@InputType()
export class VehicleUpdateManyWithoutUserNestedInput {

    @Field(() => [VehicleCreateWithoutUserInput], {nullable:true})
    @Type(() => VehicleCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<VehicleCreateWithoutUserInput>;

    @Field(() => [VehicleCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutUserInput>;

    @Field(() => [VehicleUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VehicleUpsertWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    upsert?: Array<VehicleUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => VehicleCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VehicleCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: VehicleCreateManyUserInputEnvelope;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>>;

    @Field(() => [VehicleUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VehicleUpdateWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    update?: Array<VehicleUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [VehicleUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VehicleUpdateManyWithWhereWithoutUserInput)
    @ValidateNested()
    updateMany?: Array<VehicleUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [VehicleScalarWhereInput], {nullable:true})
    @Type(() => VehicleScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<VehicleScalarWhereInput>;
}
