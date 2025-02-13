import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutVehiclesInput } from './customer-create-without-vehicles.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateOrConnectWithoutVehiclesInput } from './customer-create-or-connect-without-vehicles.input';
import { CustomerUpsertWithoutVehiclesInput } from './customer-upsert-without-vehicles.input';
import { CustomerWhereInput } from './customer-where.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateToOneWithWhereWithoutVehiclesInput } from './customer-update-to-one-with-where-without-vehicles.input';

@InputType()
export class CustomerUpdateOneWithoutVehiclesNestedInput {

    @Field(() => CustomerCreateWithoutVehiclesInput, {nullable:true})
    @Type(() => CustomerCreateWithoutVehiclesInput)
    @ValidateNested()
    create?: CustomerCreateWithoutVehiclesInput;

    @Field(() => CustomerCreateOrConnectWithoutVehiclesInput, {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutVehiclesInput)
    @ValidateNested()
    connectOrCreate?: CustomerCreateOrConnectWithoutVehiclesInput;

    @Field(() => CustomerUpsertWithoutVehiclesInput, {nullable:true})
    @Type(() => CustomerUpsertWithoutVehiclesInput)
    @ValidateNested()
    upsert?: CustomerUpsertWithoutVehiclesInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    @ValidateNested()
    disconnect?: CustomerWhereInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    @ValidateNested()
    delete?: CustomerWhereInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>;

    @Field(() => CustomerUpdateToOneWithWhereWithoutVehiclesInput, {nullable:true})
    @Type(() => CustomerUpdateToOneWithWhereWithoutVehiclesInput)
    @ValidateNested()
    update?: CustomerUpdateToOneWithWhereWithoutVehiclesInput;
}
