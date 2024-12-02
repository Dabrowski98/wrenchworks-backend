import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutUserInput } from './service-request-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateOrConnectWithoutUserInput } from './service-request-create-or-connect-without-user.input';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestCreateManyUserInputEnvelope } from './service-request-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';

@InputType()
export class ServiceRequestCreateNestedManyWithoutUserInput {

    @Field(() => [ServiceRequestCreateWithoutUserInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<ServiceRequestCreateWithoutUserInput>;

    @Field(() => ServiceRequestCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: ServiceRequestCreateManyUserInputEnvelope;

    }