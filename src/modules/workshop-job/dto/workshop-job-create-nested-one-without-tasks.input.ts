import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCreateWithoutTasksInput } from './workshop-job-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopJobCreateOrConnectWithoutTasksInput } from './workshop-job-create-or-connect-without-tasks.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';

@InputType()
export class WorkshopJobCreateNestedOneWithoutTasksInput {

    @Field(() => WorkshopJobCreateWithoutTasksInput, {nullable:true})
    @Type(() => WorkshopJobCreateWithoutTasksInput)
    @ValidateNested()
    create?: WorkshopJobCreateWithoutTasksInput;

    @Field(() => WorkshopJobCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => WorkshopJobCreateOrConnectWithoutTasksInput)
    @ValidateNested()
    connectOrCreate?: WorkshopJobCreateOrConnectWithoutTasksInput;

    @Field(() => WorkshopJobWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>;
}
