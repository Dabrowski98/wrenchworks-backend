import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutApprovedServiceInput } from './service-request-create-without-approved-service.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateOrConnectWithoutApprovedServiceInput } from './service-request-create-or-connect-without-approved-service.input';
import { HideField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';

@InputType()
export class ServiceRequestCreateNestedOneWithoutApprovedServiceInput {

    @Field(() => ServiceRequestCreateWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestCreateWithoutApprovedServiceInput)
    @ValidateNested()
    create?: ServiceRequestCreateWithoutApprovedServiceInput;

    }