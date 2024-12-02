import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutJobWorkshopsInput } from './job-create-without-job-workshops.input';
import { HideField } from '@nestjs/graphql';
import { JobCreateOrConnectWithoutJobWorkshopsInput } from './job-create-or-connect-without-job-workshops.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class JobCreateNestedOneWithoutJobWorkshopsInput {

    @Field(() => JobWhereUniqueInput, {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>;
}