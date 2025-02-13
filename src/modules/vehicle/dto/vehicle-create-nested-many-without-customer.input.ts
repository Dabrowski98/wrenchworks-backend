import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutCustomerInput } from './vehicle-create-without-customer.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutCustomerInput } from './vehicle-create-or-connect-without-customer.input';
import { VehicleCreateManyCustomerInputEnvelope } from './vehicle-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleCreateNestedManyWithoutCustomerInput {

    @Field(() => [VehicleCreateWithoutCustomerInput], {nullable:true})
    @Type(() => VehicleCreateWithoutCustomerInput)
    @ValidateNested()
    create?: Array<VehicleCreateWithoutCustomerInput>;

    @Field(() => [VehicleCreateOrConnectWithoutCustomerInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutCustomerInput)
    @ValidateNested()
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutCustomerInput>;

    @Field(() => VehicleCreateManyCustomerInputEnvelope, {nullable:true})
    @Type(() => VehicleCreateManyCustomerInputEnvelope)
    @ValidateNested()
    createMany?: VehicleCreateManyCustomerInputEnvelope;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>>;
}
