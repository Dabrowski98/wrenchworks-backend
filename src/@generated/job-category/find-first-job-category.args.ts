import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobCategoryWhereInput } from './job-category-where.input';
import { Type } from 'class-transformer';
import { JobCategoryOrderByWithRelationInput } from './job-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { JobCategoryScalarFieldEnum } from './job-category-scalar-field.enum';

@ArgsType()
export class FindFirstJobCategoryArgs {

    @Field(() => JobCategoryWhereInput, {nullable:true})
    @Type(() => JobCategoryWhereInput)
    where?: JobCategoryWhereInput;

    @Field(() => [JobCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JobCategoryOrderByWithRelationInput>;

    @Field(() => JobCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [JobCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof JobCategoryScalarFieldEnum>;
}
