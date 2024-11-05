import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateWithoutWorkshopsInput } from './job-category-create-without-workshops.input';

@InputType()
export class JobCategoryCreateOrConnectWithoutWorkshopsInput {

    @Field(() => JobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => JobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;

    @Field(() => JobCategoryCreateWithoutWorkshopsInput, {nullable:false})
    @Type(() => JobCategoryCreateWithoutWorkshopsInput)
    create!: JobCategoryCreateWithoutWorkshopsInput;
}
