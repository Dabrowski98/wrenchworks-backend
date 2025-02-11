import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobCreateWithoutJobWorkshopsInput } from './job-create-without-job-workshops.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class JobCreateOrConnectWithoutJobWorkshopsInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: Prisma.AtLeast<JobWhereUniqueInput, 'jobId' | 'name'>;

    @Field(() => JobCreateWithoutJobWorkshopsInput, {nullable:false})
    @Type(() => JobCreateWithoutJobWorkshopsInput)
    @ValidateNested()
    create!: JobCreateWithoutJobWorkshopsInput;
}
