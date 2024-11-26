import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutServiceRequestInput } from './service-create-without-service-request.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceCreateOrConnectWithoutServiceRequestInput } from './service-create-or-connect-without-service-request.input';
import { ServiceUpsertWithoutServiceRequestInput } from './service-upsert-without-service-request.input';
import { ServiceWhereInput } from './service-where.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { ServiceUpdateToOneWithWhereWithoutServiceRequestInput } from './service-update-to-one-with-where-without-service-request.input';

@InputType()
export class ServiceUpdateOneWithoutServiceRequestNestedInput {

    @Field(() => ServiceCreateWithoutServiceRequestInput, {nullable:true})
    @Type(() => ServiceCreateWithoutServiceRequestInput)
    @ValidateNested()
    create?: ServiceCreateWithoutServiceRequestInput;

    @Field(() => ServiceCreateOrConnectWithoutServiceRequestInput, {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutServiceRequestInput)
    @ValidateNested()
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceRequestInput;

    @Field(() => ServiceUpsertWithoutServiceRequestInput, {nullable:true})
    @Type(() => ServiceUpsertWithoutServiceRequestInput)
    @ValidateNested()
    upsert?: ServiceUpsertWithoutServiceRequestInput;

    @Field(() => ServiceWhereInput, {nullable:true})
    @Type(() => ServiceWhereInput)
    @ValidateNested()
    disconnect?: ServiceWhereInput;

    @Field(() => ServiceWhereInput, {nullable:true})
    @Type(() => ServiceWhereInput)
    @ValidateNested()
    delete?: ServiceWhereInput;

    @Field(() => ServiceWhereUniqueInput, {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceUpdateToOneWithWhereWithoutServiceRequestInput, {nullable:true})
    @Type(() => ServiceUpdateToOneWithWhereWithoutServiceRequestInput)
    @ValidateNested()
    update?: ServiceUpdateToOneWithWhereWithoutServiceRequestInput;
}
