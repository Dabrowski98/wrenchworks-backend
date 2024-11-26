import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { JobCategoryUpdateWithoutWorkshopsInput } from './job-category-update-without-workshops.input';
import { ValidateNested } from 'class-validator';
import { JobCategoryCreateWithoutWorkshopsInput } from './job-category-create-without-workshops.input';

@InputType()
export class JobCategoryUpsertWithWhereUniqueWithoutWorkshopsInput {

    @Field(() => JobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => JobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;

    @Field(() => JobCategoryUpdateWithoutWorkshopsInput, {nullable:false})
    @Type(() => JobCategoryUpdateWithoutWorkshopsInput)
    @ValidateNested()
    update!: JobCategoryUpdateWithoutWorkshopsInput;

    @Field(() => JobCategoryCreateWithoutWorkshopsInput, {nullable:false})
    @Type(() => JobCategoryCreateWithoutWorkshopsInput)
    @ValidateNested()
    create!: JobCategoryCreateWithoutWorkshopsInput;
}
