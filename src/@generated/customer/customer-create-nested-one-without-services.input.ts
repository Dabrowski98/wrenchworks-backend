import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutServicesInput } from './customer-create-without-services.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutServicesInput } from './customer-create-or-connect-without-services.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedOneWithoutServicesInput {

    @Field(() => CustomerCreateWithoutServicesInput, {nullable:true})
    @Type(() => CustomerCreateWithoutServicesInput)
    create?: CustomerCreateWithoutServicesInput;

    @Field(() => CustomerCreateOrConnectWithoutServicesInput, {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutServicesInput)
    connectOrCreate?: CustomerCreateOrConnectWithoutServicesInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>;
}
