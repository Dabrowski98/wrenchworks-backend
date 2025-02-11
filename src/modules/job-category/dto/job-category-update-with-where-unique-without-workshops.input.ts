import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { JobCategoryUpdateWithoutWorkshopsInput } from './job-category-update-without-workshops.input';

@InputType()
export class JobCategoryUpdateWithWhereUniqueWithoutWorkshopsInput {

    @Field(() => JobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => JobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId' | 'name'>;

    @Field(() => JobCategoryUpdateWithoutWorkshopsInput, {nullable:false})
    @Type(() => JobCategoryUpdateWithoutWorkshopsInput)
    data!: JobCategoryUpdateWithoutWorkshopsInput;
}
