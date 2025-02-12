import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCreateWithoutWorkshopInput } from './workshop-job-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopJobCreateOrConnectWithoutWorkshopInput } from './workshop-job-create-or-connect-without-workshop.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopJobCreateManyWorkshopInputEnvelope } from './workshop-job-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';

@InputType()
export class WorkshopJobCreateNestedManyWithoutWorkshopInput {

    @Field(() => [WorkshopJobCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopJobCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<WorkshopJobCreateWithoutWorkshopInput>;

    @Field(() => WorkshopJobCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => WorkshopJobCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: WorkshopJobCreateManyWorkshopInputEnvelope;

    }