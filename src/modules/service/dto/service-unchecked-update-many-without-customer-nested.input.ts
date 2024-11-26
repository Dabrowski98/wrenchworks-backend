import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutCustomerInput } from './service-create-without-customer.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceCreateOrConnectWithoutCustomerInput } from './service-create-or-connect-without-customer.input';
import { ServiceUpsertWithWhereUniqueWithoutCustomerInput } from './service-upsert-with-where-unique-without-customer.input';
import { ServiceCreateManyCustomerInputEnvelope } from './service-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { ServiceUpdateWithWhereUniqueWithoutCustomerInput } from './service-update-with-where-unique-without-customer.input';
import { ServiceUpdateManyWithWhereWithoutCustomerInput } from './service-update-many-with-where-without-customer.input';
import { ServiceScalarWhereInput } from './service-scalar-where.input';

@InputType()
export class ServiceUncheckedUpdateManyWithoutCustomerNestedInput {

    @Field(() => [ServiceCreateWithoutCustomerInput], {nullable:true})
    @Type(() => ServiceCreateWithoutCustomerInput)
    @ValidateNested()
    create?: Array<ServiceCreateWithoutCustomerInput>;

    @Field(() => [ServiceCreateOrConnectWithoutCustomerInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutCustomerInput)
    @ValidateNested()
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutCustomerInput>;

    @Field(() => [ServiceUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    @Type(() => ServiceUpsertWithWhereUniqueWithoutCustomerInput)
    @ValidateNested()
    upsert?: Array<ServiceUpsertWithWhereUniqueWithoutCustomerInput>;

    @Field(() => ServiceCreateManyCustomerInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyCustomerInputEnvelope)
    @ValidateNested()
    createMany?: ServiceCreateManyCustomerInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;

    @Field(() => [ServiceUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    @Type(() => ServiceUpdateWithWhereUniqueWithoutCustomerInput)
    @ValidateNested()
    update?: Array<ServiceUpdateWithWhereUniqueWithoutCustomerInput>;

    @Field(() => [ServiceUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    @Type(() => ServiceUpdateManyWithWhereWithoutCustomerInput)
    @ValidateNested()
    updateMany?: Array<ServiceUpdateManyWithWhereWithoutCustomerInput>;

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    @Type(() => ServiceScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<ServiceScalarWhereInput>;
}
