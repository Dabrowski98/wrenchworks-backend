import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateWithoutChildInput } from './job-category-create-without-child.input';

@InputType()
export class JobCategoryCreateOrConnectWithoutChildInput {

    @Field(() => JobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => JobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;

    @Field(() => JobCategoryCreateWithoutChildInput, {nullable:false})
    @Type(() => JobCategoryCreateWithoutChildInput)
    create!: JobCategoryCreateWithoutChildInput;
}
