import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutCustomerInput } from './vehicle-create-without-customer.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutCustomerInput } from './vehicle-create-or-connect-without-customer.input';
import { VehicleUpsertWithWhereUniqueWithoutCustomerInput } from './vehicle-upsert-with-where-unique-without-customer.input';
import { VehicleCreateManyCustomerInputEnvelope } from './vehicle-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateWithWhereUniqueWithoutCustomerInput } from './vehicle-update-with-where-unique-without-customer.input';
import { VehicleUpdateManyWithWhereWithoutCustomerInput } from './vehicle-update-many-with-where-without-customer.input';
import { VehicleScalarWhereInput } from './vehicle-scalar-where.input';

@InputType()
export class VehicleUncheckedUpdateManyWithoutCustomerNestedInput {

    @Field(() => [VehicleCreateWithoutCustomerInput], {nullable:true})
    @Type(() => VehicleCreateWithoutCustomerInput)
    @ValidateNested()
    create?: Array<VehicleCreateWithoutCustomerInput>;

    @Field(() => [VehicleCreateOrConnectWithoutCustomerInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutCustomerInput)
    @ValidateNested()
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutCustomerInput>;

    @Field(() => [VehicleUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    @Type(() => VehicleUpsertWithWhereUniqueWithoutCustomerInput)
    @ValidateNested()
    upsert?: Array<VehicleUpsertWithWhereUniqueWithoutCustomerInput>;

    @Field(() => VehicleCreateManyCustomerInputEnvelope, {nullable:true})
    @Type(() => VehicleCreateManyCustomerInputEnvelope)
    @ValidateNested()
    createMany?: VehicleCreateManyCustomerInputEnvelope;

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

    @Field(() => [VehicleUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    @Type(() => VehicleUpdateWithWhereUniqueWithoutCustomerInput)
    @ValidateNested()
    update?: Array<VehicleUpdateWithWhereUniqueWithoutCustomerInput>;

    @Field(() => [VehicleUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    @Type(() => VehicleUpdateManyWithWhereWithoutCustomerInput)
    @ValidateNested()
    updateMany?: Array<VehicleUpdateManyWithWhereWithoutCustomerInput>;

    @Field(() => [VehicleScalarWhereInput], {nullable:true})
    @Type(() => VehicleScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<VehicleScalarWhereInput>;
}
