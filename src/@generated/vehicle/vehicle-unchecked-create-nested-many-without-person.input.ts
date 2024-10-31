import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutPersonInput } from './vehicle-create-without-person.input';
import { Type } from 'class-transformer';
import { VehicleCreateOrConnectWithoutPersonInput } from './vehicle-create-or-connect-without-person.input';
import { VehicleCreateManyPersonInputEnvelope } from './vehicle-create-many-person-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleUncheckedCreateNestedManyWithoutPersonInput {

    @Field(() => [VehicleCreateWithoutPersonInput], {nullable:true})
    @Type(() => VehicleCreateWithoutPersonInput)
    create?: Array<VehicleCreateWithoutPersonInput>;

    @Field(() => [VehicleCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutPersonInput>;

    @Field(() => VehicleCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => VehicleCreateManyPersonInputEnvelope)
    createMany?: VehicleCreateManyPersonInputEnvelope;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>>;
}
