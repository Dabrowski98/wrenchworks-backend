import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobUpdateWithoutWorkshopJobsInput } from './job-update-without-workshop-jobs.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCreateWithoutWorkshopJobsInput } from './job-create-without-workshop-jobs.input';
import { JobWhereInput } from './job-where.input';

@InputType()
export class JobUpsertWithoutWorkshopJobsInput {

    @Field(() => JobUpdateWithoutWorkshopJobsInput, {nullable:false})
    @Type(() => JobUpdateWithoutWorkshopJobsInput)
    @ValidateNested()
    update!: JobUpdateWithoutWorkshopJobsInput;

    @Field(() => JobCreateWithoutWorkshopJobsInput, {nullable:false})
    @Type(() => JobCreateWithoutWorkshopJobsInput)
    @ValidateNested()
    create!: JobCreateWithoutWorkshopJobsInput;

    @Field(() => JobWhereInput, {nullable:true})
    @Type(() => JobWhereInput)
    where?: JobWhereInput;
}
