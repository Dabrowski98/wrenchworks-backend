import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutWorkshopJobsInput } from './job-create-without-workshop-jobs.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCreateOrConnectWithoutWorkshopJobsInput } from './job-create-or-connect-without-workshop-jobs.input';
import { JobUpsertWithoutWorkshopJobsInput } from './job-upsert-without-workshop-jobs.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateToOneWithWhereWithoutWorkshopJobsInput } from './job-update-to-one-with-where-without-workshop-jobs.input';

@InputType()
export class JobUpdateOneRequiredWithoutWorkshopJobsNestedInput {

    @Field(() => JobCreateWithoutWorkshopJobsInput, {nullable:true})
    @Type(() => JobCreateWithoutWorkshopJobsInput)
    @ValidateNested()
    create?: JobCreateWithoutWorkshopJobsInput;

    @Field(() => JobCreateOrConnectWithoutWorkshopJobsInput, {nullable:true})
    @Type(() => JobCreateOrConnectWithoutWorkshopJobsInput)
    @ValidateNested()
    connectOrCreate?: JobCreateOrConnectWithoutWorkshopJobsInput;

    @Field(() => JobUpsertWithoutWorkshopJobsInput, {nullable:true})
    @Type(() => JobUpsertWithoutWorkshopJobsInput)
    @ValidateNested()
    upsert?: JobUpsertWithoutWorkshopJobsInput;

    @Field(() => JobWhereUniqueInput, {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<JobWhereUniqueInput, 'jobId' | 'name'>;

    @Field(() => JobUpdateToOneWithWhereWithoutWorkshopJobsInput, {nullable:true})
    @Type(() => JobUpdateToOneWithWhereWithoutWorkshopJobsInput)
    @ValidateNested()
    update?: JobUpdateToOneWithWhereWithoutWorkshopJobsInput;
}
