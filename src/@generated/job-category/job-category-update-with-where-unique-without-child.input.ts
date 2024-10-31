import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { JobCategoryUpdateWithoutChildInput } from './job-category-update-without-child.input';

@InputType()
export class JobCategoryUpdateWithWhereUniqueWithoutChildInput {

    @Field(() => JobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => JobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;

    @Field(() => JobCategoryUpdateWithoutChildInput, {nullable:false})
    @Type(() => JobCategoryUpdateWithoutChildInput)
    data!: JobCategoryUpdateWithoutChildInput;
}
