import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutCustomersInput } from './vehicle-create-without-customers.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutCustomersInput } from './vehicle-create-or-connect-without-customers.input';
import { VehicleUpsertWithWhereUniqueWithoutCustomersInput } from './vehicle-upsert-with-where-unique-without-customers.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateWithWhereUniqueWithoutCustomersInput } from './vehicle-update-with-where-unique-without-customers.input';
import { VehicleUpdateManyWithWhereWithoutCustomersInput } from './vehicle-update-many-with-where-without-customers.input';
import { VehicleScalarWhereInput } from './vehicle-scalar-where.input';

@InputType()
export class VehicleUpdateManyWithoutCustomersNestedInput {

    @Field(() => [VehicleCreateWithoutCustomersInput], {nullable:true})
    @Type(() => VehicleCreateWithoutCustomersInput)
    @ValidateNested()
    create?: Array<VehicleCreateWithoutCustomersInput>;

    @Field(() => [VehicleCreateOrConnectWithoutCustomersInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutCustomersInput)
    @ValidateNested()
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutCustomersInput>;

    @Field(() => [VehicleUpsertWithWhereUniqueWithoutCustomersInput], {nullable:true})
    @Type(() => VehicleUpsertWithWhereUniqueWithoutCustomersInput)
    @ValidateNested()
    upsert?: Array<VehicleUpsertWithWhereUniqueWithoutCustomersInput>;

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

    @Field(() => [VehicleUpdateWithWhereUniqueWithoutCustomersInput], {nullable:true})
    @Type(() => VehicleUpdateWithWhereUniqueWithoutCustomersInput)
    @ValidateNested()
    update?: Array<VehicleUpdateWithWhereUniqueWithoutCustomersInput>;

    @Field(() => [VehicleUpdateManyWithWhereWithoutCustomersInput], {nullable:true})
    @Type(() => VehicleUpdateManyWithWhereWithoutCustomersInput)
    @ValidateNested()
    updateMany?: Array<VehicleUpdateManyWithWhereWithoutCustomersInput>;

    @Field(() => [VehicleScalarWhereInput], {nullable:true})
    @Type(() => VehicleScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<VehicleScalarWhereInput>;
}
