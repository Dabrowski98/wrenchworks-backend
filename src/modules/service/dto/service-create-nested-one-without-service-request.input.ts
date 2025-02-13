import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutServiceRequestInput } from './service-create-without-service-request.input';
import { HideField } from '@nestjs/graphql';
import { ServiceCreateOrConnectWithoutServiceRequestInput } from './service-create-or-connect-without-service-request.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceCreateNestedOneWithoutServiceRequestInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;
}