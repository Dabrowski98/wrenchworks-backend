import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCreateWithoutJobInput } from './workshop-job-create-without-job.input';
import { Type } from 'class-transformer';
import { WorkshopJobCreateOrConnectWithoutJobInput } from './workshop-job-create-or-connect-without-job.input';
import { WorkshopJobUpsertWithWhereUniqueWithoutJobInput } from './workshop-job-upsert-with-where-unique-without-job.input';
import { WorkshopJobCreateManyJobInputEnvelope } from './workshop-job-create-many-job-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import { WorkshopJobUpdateWithWhereUniqueWithoutJobInput } from './workshop-job-update-with-where-unique-without-job.input';
import { WorkshopJobUpdateManyWithWhereWithoutJobInput } from './workshop-job-update-many-with-where-without-job.input';
import { WorkshopJobScalarWhereInput } from './workshop-job-scalar-where.input';

@InputType()
export class WorkshopJobUncheckedUpdateManyWithoutJobNestedInput {

    @Field(() => [WorkshopJobCreateWithoutJobInput], {nullable:true})
    @Type(() => WorkshopJobCreateWithoutJobInput)
    create?: Array<WorkshopJobCreateWithoutJobInput>;

    @Field(() => [WorkshopJobCreateOrConnectWithoutJobInput], {nullable:true})
    @Type(() => WorkshopJobCreateOrConnectWithoutJobInput)
    connectOrCreate?: Array<WorkshopJobCreateOrConnectWithoutJobInput>;

    @Field(() => [WorkshopJobUpsertWithWhereUniqueWithoutJobInput], {nullable:true})
    @Type(() => WorkshopJobUpsertWithWhereUniqueWithoutJobInput)
    upsert?: Array<WorkshopJobUpsertWithWhereUniqueWithoutJobInput>;

    @Field(() => WorkshopJobCreateManyJobInputEnvelope, {nullable:true})
    @Type(() => WorkshopJobCreateManyJobInputEnvelope)
    createMany?: WorkshopJobCreateManyJobInputEnvelope;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    set?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;

    @Field(() => [WorkshopJobUpdateWithWhereUniqueWithoutJobInput], {nullable:true})
    @Type(() => WorkshopJobUpdateWithWhereUniqueWithoutJobInput)
    update?: Array<WorkshopJobUpdateWithWhereUniqueWithoutJobInput>;

    @Field(() => [WorkshopJobUpdateManyWithWhereWithoutJobInput], {nullable:true})
    @Type(() => WorkshopJobUpdateManyWithWhereWithoutJobInput)
    updateMany?: Array<WorkshopJobUpdateManyWithWhereWithoutJobInput>;

    @Field(() => [WorkshopJobScalarWhereInput], {nullable:true})
    @Type(() => WorkshopJobScalarWhereInput)
    deleteMany?: Array<WorkshopJobScalarWhereInput>;
}
