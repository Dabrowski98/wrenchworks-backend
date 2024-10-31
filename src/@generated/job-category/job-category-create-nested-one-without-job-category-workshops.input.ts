import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutJobCategoryWorkshopsInput } from './job-category-create-without-job-category-workshops.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateOrConnectWithoutJobCategoryWorkshopsInput } from './job-category-create-or-connect-without-job-category-workshops.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';

@InputType()
export class JobCategoryCreateNestedOneWithoutJobCategoryWorkshopsInput {

    @Field(() => JobCategoryCreateWithoutJobCategoryWorkshopsInput, {nullable:true})
    @Type(() => JobCategoryCreateWithoutJobCategoryWorkshopsInput)
    create?: JobCategoryCreateWithoutJobCategoryWorkshopsInput;

    @Field(() => JobCategoryCreateOrConnectWithoutJobCategoryWorkshopsInput, {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutJobCategoryWorkshopsInput)
    connectOrCreate?: JobCategoryCreateOrConnectWithoutJobCategoryWorkshopsInput;

    @Field(() => JobCategoryWhereUniqueInput, {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;
}
