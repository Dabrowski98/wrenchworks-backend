import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutVehiclesInput } from './customer-create-without-vehicles.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerCreateOrConnectWithoutVehiclesInput } from './customer-create-or-connect-without-vehicles.input';
import { CustomerUpsertWithWhereUniqueWithoutVehiclesInput } from './customer-upsert-with-where-unique-without-vehicles.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithWhereUniqueWithoutVehiclesInput } from './customer-update-with-where-unique-without-vehicles.input';
import { CustomerUpdateManyWithWhereWithoutVehiclesInput } from './customer-update-many-with-where-without-vehicles.input';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';

@InputType()
export class CustomerUpdateManyWithoutVehiclesNestedInput {

    @Field(() => [CustomerCreateWithoutVehiclesInput], {nullable:true})
    @Type(() => CustomerCreateWithoutVehiclesInput)
    @ValidateNested()
    create?: Array<CustomerCreateWithoutVehiclesInput>;

    @Field(() => [CustomerCreateOrConnectWithoutVehiclesInput], {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutVehiclesInput)
    @ValidateNested()
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutVehiclesInput>;

    @Field(() => [CustomerUpsertWithWhereUniqueWithoutVehiclesInput], {nullable:true})
    @Type(() => CustomerUpsertWithWhereUniqueWithoutVehiclesInput)
    @ValidateNested()
    upsert?: Array<CustomerUpsertWithWhereUniqueWithoutVehiclesInput>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>>;

    @Field(() => [CustomerUpdateWithWhereUniqueWithoutVehiclesInput], {nullable:true})
    @Type(() => CustomerUpdateWithWhereUniqueWithoutVehiclesInput)
    @ValidateNested()
    update?: Array<CustomerUpdateWithWhereUniqueWithoutVehiclesInput>;

    @Field(() => [CustomerUpdateManyWithWhereWithoutVehiclesInput], {nullable:true})
    @Type(() => CustomerUpdateManyWithWhereWithoutVehiclesInput)
    @ValidateNested()
    updateMany?: Array<CustomerUpdateManyWithWhereWithoutVehiclesInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    @Type(() => CustomerScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<CustomerScalarWhereInput>;
}
