import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutCustomersInput } from './vehicle-create-without-customers.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutCustomersInput } from './vehicle-create-or-connect-without-customers.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleUncheckedCreateNestedManyWithoutCustomersInput {

    @Field(() => [VehicleCreateWithoutCustomersInput], {nullable:true})
    @Type(() => VehicleCreateWithoutCustomersInput)
    @ValidateNested()
    create?: Array<VehicleCreateWithoutCustomersInput>;

    @Field(() => [VehicleCreateOrConnectWithoutCustomersInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutCustomersInput)
    @ValidateNested()
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutCustomersInput>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>>;
}
