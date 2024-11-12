import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutPersonInput } from './vehicle-create-without-person.input';
import { Type } from 'class-transformer';
import { VehicleCreateOrConnectWithoutPersonInput } from './vehicle-create-or-connect-without-person.input';
import { VehicleUpsertWithWhereUniqueWithoutPersonInput } from './vehicle-upsert-with-where-unique-without-person.input';
import { VehicleCreateManyPersonInputEnvelope } from './vehicle-create-many-person-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateWithWhereUniqueWithoutPersonInput } from './vehicle-update-with-where-unique-without-person.input';
import { VehicleUpdateManyWithWhereWithoutPersonInput } from './vehicle-update-many-with-where-without-person.input';
import { VehicleScalarWhereInput } from './vehicle-scalar-where.input';

@InputType()
export class VehicleUncheckedUpdateManyWithoutPersonNestedInput {

    @Field(() => [VehicleCreateWithoutPersonInput], {nullable:true})
    @Type(() => VehicleCreateWithoutPersonInput)
    create?: Array<VehicleCreateWithoutPersonInput>;

    @Field(() => [VehicleCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutPersonInput>;

    @Field(() => [VehicleUpsertWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => VehicleUpsertWithWhereUniqueWithoutPersonInput)
    upsert?: Array<VehicleUpsertWithWhereUniqueWithoutPersonInput>;

    @Field(() => VehicleCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => VehicleCreateManyPersonInputEnvelope)
    createMany?: VehicleCreateManyPersonInputEnvelope;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>>;

    @Field(() => [VehicleUpdateWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => VehicleUpdateWithWhereUniqueWithoutPersonInput)
    update?: Array<VehicleUpdateWithWhereUniqueWithoutPersonInput>;

    @Field(() => [VehicleUpdateManyWithWhereWithoutPersonInput], {nullable:true})
    @Type(() => VehicleUpdateManyWithWhereWithoutPersonInput)
    updateMany?: Array<VehicleUpdateManyWithWhereWithoutPersonInput>;

    @Field(() => [VehicleScalarWhereInput], {nullable:true})
    @Type(() => VehicleScalarWhereInput)
    deleteMany?: Array<VehicleScalarWhereInput>;
}
