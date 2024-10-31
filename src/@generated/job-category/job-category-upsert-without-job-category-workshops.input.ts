import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryUpdateWithoutJobCategoryWorkshopsInput } from './job-category-update-without-job-category-workshops.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateWithoutJobCategoryWorkshopsInput } from './job-category-create-without-job-category-workshops.input';
import { JobCategoryWhereInput } from './job-category-where.input';

@InputType()
export class JobCategoryUpsertWithoutJobCategoryWorkshopsInput {

    @Field(() => JobCategoryUpdateWithoutJobCategoryWorkshopsInput, {nullable:false})
    @Type(() => JobCategoryUpdateWithoutJobCategoryWorkshopsInput)
    update!: JobCategoryUpdateWithoutJobCategoryWorkshopsInput;

    @Field(() => JobCategoryCreateWithoutJobCategoryWorkshopsInput, {nullable:false})
    @Type(() => JobCategoryCreateWithoutJobCategoryWorkshopsInput)
    create!: JobCategoryCreateWithoutJobCategoryWorkshopsInput;

    @Field(() => JobCategoryWhereInput, {nullable:true})
    @Type(() => JobCategoryWhereInput)
    where?: JobCategoryWhereInput;
}
