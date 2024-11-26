import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCreateWithoutJobInput } from './workshop-job-create-without-job.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
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
    @ValidateNested()
    create?: Array<WorkshopJobCreateWithoutJobInput>;

    @Field(() => [WorkshopJobCreateOrConnectWithoutJobInput], {nullable:true})
    @Type(() => WorkshopJobCreateOrConnectWithoutJobInput)
    @ValidateNested()
    connectOrCreate?: Array<WorkshopJobCreateOrConnectWithoutJobInput>;

    @Field(() => [WorkshopJobUpsertWithWhereUniqueWithoutJobInput], {nullable:true})
    @Type(() => WorkshopJobUpsertWithWhereUniqueWithoutJobInput)
    @ValidateNested()
    upsert?: Array<WorkshopJobUpsertWithWhereUniqueWithoutJobInput>;

    @Field(() => WorkshopJobCreateManyJobInputEnvelope, {nullable:true})
    @Type(() => WorkshopJobCreateManyJobInputEnvelope)
    @ValidateNested()
    createMany?: WorkshopJobCreateManyJobInputEnvelope;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;

    @Field(() => [WorkshopJobWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>>;

    @Field(() => [WorkshopJobUpdateWithWhereUniqueWithoutJobInput], {nullable:true})
    @Type(() => WorkshopJobUpdateWithWhereUniqueWithoutJobInput)
    @ValidateNested()
    update?: Array<WorkshopJobUpdateWithWhereUniqueWithoutJobInput>;

    @Field(() => [WorkshopJobUpdateManyWithWhereWithoutJobInput], {nullable:true})
    @Type(() => WorkshopJobUpdateManyWithWhereWithoutJobInput)
    @ValidateNested()
    updateMany?: Array<WorkshopJobUpdateManyWithWhereWithoutJobInput>;

    @Field(() => [WorkshopJobScalarWhereInput], {nullable:true})
    @Type(() => WorkshopJobScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<WorkshopJobScalarWhereInput>;
}
