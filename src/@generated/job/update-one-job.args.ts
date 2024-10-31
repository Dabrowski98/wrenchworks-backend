import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobUpdateInput } from './job-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';

@ArgsType()
export class UpdateOneJobArgs {

    @Field(() => JobUpdateInput, {nullable:false})
    @Type(() => JobUpdateInput)
    data!: JobUpdateInput;

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>;
}
