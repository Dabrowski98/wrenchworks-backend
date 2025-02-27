import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateWithoutEmployeeInput } from './join-workshop-request-create-without-employee.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestCreateOrConnectWithoutEmployeeInput } from './join-workshop-request-create-or-connect-without-employee.input';
import { HideField } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateManyEmployeeInputEnvelope } from './join-workshop-request-create-many-employee-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';

@InputType()
export class JoinWorkshopRequestCreateNestedManyWithoutEmployeeInput {

    @Field(() => [JoinWorkshopRequestCreateWithoutEmployeeInput], {nullable:true})
    @Type(() => JoinWorkshopRequestCreateWithoutEmployeeInput)
    @ValidateNested()
    create?: Array<JoinWorkshopRequestCreateWithoutEmployeeInput>;

    @Field(() => JoinWorkshopRequestCreateManyEmployeeInputEnvelope, {nullable:true})
    @Type(() => JoinWorkshopRequestCreateManyEmployeeInputEnvelope)
    @ValidateNested()
    createMany?: JoinWorkshopRequestCreateManyEmployeeInputEnvelope;

    }