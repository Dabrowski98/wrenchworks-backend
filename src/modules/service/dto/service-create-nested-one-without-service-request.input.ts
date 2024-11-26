import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutServiceRequestInput } from './service-create-without-service-request.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceCreateOrConnectWithoutServiceRequestInput } from './service-create-or-connect-without-service-request.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceCreateNestedOneWithoutServiceRequestInput {

    @Field(() => ServiceCreateWithoutServiceRequestInput, {nullable:true})
    @Type(() => ServiceCreateWithoutServiceRequestInput)
    @ValidateNested()
    create?: ServiceCreateWithoutServiceRequestInput;

    @Field(() => ServiceCreateOrConnectWithoutServiceRequestInput, {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutServiceRequestInput)
    @ValidateNested()
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceRequestInput;

    @Field(() => ServiceWhereUniqueInput, {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;
}
