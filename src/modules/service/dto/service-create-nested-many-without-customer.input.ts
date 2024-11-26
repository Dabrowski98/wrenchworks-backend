import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutCustomerInput } from './service-create-without-customer.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceCreateOrConnectWithoutCustomerInput } from './service-create-or-connect-without-customer.input';
import { ServiceCreateManyCustomerInputEnvelope } from './service-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceCreateNestedManyWithoutCustomerInput {

    @Field(() => [ServiceCreateWithoutCustomerInput], {nullable:true})
    @Type(() => ServiceCreateWithoutCustomerInput)
    @ValidateNested()
    create?: Array<ServiceCreateWithoutCustomerInput>;

    @Field(() => [ServiceCreateOrConnectWithoutCustomerInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutCustomerInput)
    @ValidateNested()
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutCustomerInput>;

    @Field(() => ServiceCreateManyCustomerInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyCustomerInputEnvelope)
    @ValidateNested()
    createMany?: ServiceCreateManyCustomerInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;
}
