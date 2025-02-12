import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopJobsInput } from './workshop-create-without-workshop-jobs.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateOrConnectWithoutWorkshopJobsInput } from './workshop-create-or-connect-without-workshop-jobs.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateNestedOneWithoutWorkshopJobsInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;
}