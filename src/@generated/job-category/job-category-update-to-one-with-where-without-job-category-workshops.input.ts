import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryWhereInput } from './job-category-where.input';
import { Type } from 'class-transformer';
import { JobCategoryUpdateWithoutJobCategoryWorkshopsInput } from './job-category-update-without-job-category-workshops.input';

@InputType()
export class JobCategoryUpdateToOneWithWhereWithoutJobCategoryWorkshopsInput {

    @Field(() => JobCategoryWhereInput, {nullable:true})
    @Type(() => JobCategoryWhereInput)
    where?: JobCategoryWhereInput;

    @Field(() => JobCategoryUpdateWithoutJobCategoryWorkshopsInput, {nullable:false})
    @Type(() => JobCategoryUpdateWithoutJobCategoryWorkshopsInput)
    data!: JobCategoryUpdateWithoutJobCategoryWorkshopsInput;
}
