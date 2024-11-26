import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutServicesInput } from './customer-create-without-services.input';
import { HideField } from '@nestjs/graphql';
import { CustomerCreateOrConnectWithoutServicesInput } from './customer-create-or-connect-without-services.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class CustomerCreateNestedOneWithoutServicesInput {

    @HideField()
    create?: CustomerCreateWithoutServicesInput;

    @HideField()
    connectOrCreate?: CustomerCreateOrConnectWithoutServicesInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>;
}
