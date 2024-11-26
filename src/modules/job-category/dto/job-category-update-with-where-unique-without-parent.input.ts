import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { JobCategoryUpdateWithoutParentInput } from './job-category-update-without-parent.input';

@InputType()
export class JobCategoryUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => JobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => JobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;

    @Field(() => JobCategoryUpdateWithoutParentInput, {nullable:false})
    @Type(() => JobCategoryUpdateWithoutParentInput)
    data!: JobCategoryUpdateWithoutParentInput;
}
