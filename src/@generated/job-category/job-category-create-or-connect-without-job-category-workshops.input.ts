import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateWithoutJobCategoryWorkshopsInput } from './job-category-create-without-job-category-workshops.input';

@InputType()
export class JobCategoryCreateOrConnectWithoutJobCategoryWorkshopsInput {

    @Field(() => JobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => JobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;

    @Field(() => JobCategoryCreateWithoutJobCategoryWorkshopsInput, {nullable:false})
    @Type(() => JobCategoryCreateWithoutJobCategoryWorkshopsInput)
    create!: JobCategoryCreateWithoutJobCategoryWorkshopsInput;
}
