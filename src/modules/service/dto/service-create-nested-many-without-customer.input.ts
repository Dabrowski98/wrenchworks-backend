import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutCustomerInput } from './service-create-without-customer.input';
import { HideField } from '@nestjs/graphql';
import { ServiceCreateOrConnectWithoutCustomerInput } from './service-create-or-connect-without-customer.input';
import { ServiceCreateManyCustomerInputEnvelope } from './service-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceCreateNestedManyWithoutCustomerInput {

    @HideField()
    create?: Array<ServiceCreateWithoutCustomerInput>;

    @HideField()
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutCustomerInput>;

    @HideField()
    createMany?: ServiceCreateManyCustomerInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;
}
