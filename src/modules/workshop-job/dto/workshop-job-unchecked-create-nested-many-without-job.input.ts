import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCreateWithoutJobInput } from './workshop-job-create-without-job.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopJobCreateOrConnectWithoutJobInput } from './workshop-job-create-or-connect-without-job.input';
import { WorkshopJobCreateManyJobInputEnvelope } from './workshop-job-create-many-job-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';

@InputType()
export class WorkshopJobUncheckedCreateNestedManyWithoutJobInput {

    @Field(() => [WorkshopJobCreateWithoutJobInput], {nullable:true})
    @Type(() => WorkshopJobCreateWithoutJobInput)
    @ValidateNested()
    create?: Array<WorkshopJobCreateWithoutJobInput>;

    @Field(() => [WorkshopJobCreateOrConnectWithoutJobInput], {nullable:true})
    @Type(() => WorkshopJobCreateOrConnectWithoutJobInput)
    @ValidateNested()
    connectOrCreate?: Array<WorkshopJobCreateOrConnectWithoutJobInput>;

    @Field(() => WorkshopJobCreateManyJobInputEnvelope, {nullable:true})
    @Type(() => WorkshopJobCreateManyJobInputEnvelope)
    @ValidateNested()
    createMany?: WorkshopJobCreateManyJobInputEnvelope;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;
}
