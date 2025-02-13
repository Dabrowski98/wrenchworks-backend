import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereInput } from './job-where.input';
import { Type } from 'class-transformer';
import { JobUpdateWithoutWorkshopJobsInput } from './job-update-without-workshop-jobs.input';

@InputType()
export class JobUpdateToOneWithWhereWithoutWorkshopJobsInput {

    @Field(() => JobWhereInput, {nullable:true})
    @Type(() => JobWhereInput)
    where?: JobWhereInput;

    @Field(() => JobUpdateWithoutWorkshopJobsInput, {nullable:false})
    @Type(() => JobUpdateWithoutWorkshopJobsInput)
    data!: JobUpdateWithoutWorkshopJobsInput;
}
