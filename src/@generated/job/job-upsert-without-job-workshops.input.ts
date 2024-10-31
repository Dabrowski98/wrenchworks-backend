import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobUpdateWithoutJobWorkshopsInput } from './job-update-without-job-workshops.input';
import { Type } from 'class-transformer';
import { JobCreateWithoutJobWorkshopsInput } from './job-create-without-job-workshops.input';
import { JobWhereInput } from './job-where.input';

@InputType()
export class JobUpsertWithoutJobWorkshopsInput {

    @Field(() => JobUpdateWithoutJobWorkshopsInput, {nullable:false})
    @Type(() => JobUpdateWithoutJobWorkshopsInput)
    update!: JobUpdateWithoutJobWorkshopsInput;

    @Field(() => JobCreateWithoutJobWorkshopsInput, {nullable:false})
    @Type(() => JobCreateWithoutJobWorkshopsInput)
    create!: JobCreateWithoutJobWorkshopsInput;

    @Field(() => JobWhereInput, {nullable:true})
    @Type(() => JobWhereInput)
    where?: JobWhereInput;
}
