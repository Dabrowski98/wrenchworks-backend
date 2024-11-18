import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobUpdateInput } from './job-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneJobArgs {

    @Field(() => JobUpdateInput, {nullable:false})
    @Type(() => JobUpdateInput)
    @Validator.ValidateNested()
    data!: JobUpdateInput;

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>;
}
