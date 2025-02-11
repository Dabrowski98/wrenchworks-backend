import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobWhereInput } from './job-where.input';
import { Type } from 'class-transformer';
import { JobOrderByWithRelationInput } from './job-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Int } from '@nestjs/graphql';
import { JobScalarFieldEnum } from './job-scalar-field.enum';

@ArgsType()
export class FindManyJobArgs {

    @Field(() => JobWhereInput, {nullable:true})
    @Type(() => JobWhereInput)
    where?: JobWhereInput;

    @Field(() => [JobOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JobOrderByWithRelationInput>;

    @Field(() => JobWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<JobWhereUniqueInput, 'jobId' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [JobScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof JobScalarFieldEnum>;
}
