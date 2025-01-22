import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutVehiclesInput } from './customer-create-without-vehicles.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateOrConnectWithoutVehiclesInput } from './customer-create-or-connect-without-vehicles.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerUncheckedCreateNestedManyWithoutVehiclesInput {

    @Field(() => [CustomerCreateWithoutVehiclesInput], {nullable:true})
    @Type(() => CustomerCreateWithoutVehiclesInput)
    @ValidateNested()
    create?: Array<CustomerCreateWithoutVehiclesInput>;

    @Field(() => [CustomerCreateOrConnectWithoutVehiclesInput], {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutVehiclesInput)
    @ValidateNested()
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutVehiclesInput>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>>;
}
