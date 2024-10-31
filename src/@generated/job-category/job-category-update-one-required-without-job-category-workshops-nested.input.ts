import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutJobCategoryWorkshopsInput } from './job-category-create-without-job-category-workshops.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateOrConnectWithoutJobCategoryWorkshopsInput } from './job-category-create-or-connect-without-job-category-workshops.input';
import { JobCategoryUpsertWithoutJobCategoryWorkshopsInput } from './job-category-upsert-without-job-category-workshops.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { JobCategoryUpdateToOneWithWhereWithoutJobCategoryWorkshopsInput } from './job-category-update-to-one-with-where-without-job-category-workshops.input';

@InputType()
export class JobCategoryUpdateOneRequiredWithoutJobCategoryWorkshopsNestedInput {

    @Field(() => JobCategoryCreateWithoutJobCategoryWorkshopsInput, {nullable:true})
    @Type(() => JobCategoryCreateWithoutJobCategoryWorkshopsInput)
    create?: JobCategoryCreateWithoutJobCategoryWorkshopsInput;

    @Field(() => JobCategoryCreateOrConnectWithoutJobCategoryWorkshopsInput, {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutJobCategoryWorkshopsInput)
    connectOrCreate?: JobCategoryCreateOrConnectWithoutJobCategoryWorkshopsInput;

    @Field(() => JobCategoryUpsertWithoutJobCategoryWorkshopsInput, {nullable:true})
    @Type(() => JobCategoryUpsertWithoutJobCategoryWorkshopsInput)
    upsert?: JobCategoryUpsertWithoutJobCategoryWorkshopsInput;

    @Field(() => JobCategoryWhereUniqueInput, {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;

    @Field(() => JobCategoryUpdateToOneWithWhereWithoutJobCategoryWorkshopsInput, {nullable:true})
    @Type(() => JobCategoryUpdateToOneWithWhereWithoutJobCategoryWorkshopsInput)
    update?: JobCategoryUpdateToOneWithWhereWithoutJobCategoryWorkshopsInput;
}
