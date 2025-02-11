import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateWithoutWorkshopsInput } from './job-category-create-without-workshops.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class JobCategoryCreateOrConnectWithoutWorkshopsInput {

    @Field(() => JobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => JobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId' | 'name'>;

    @Field(() => JobCategoryCreateWithoutWorkshopsInput, {nullable:false})
    @Type(() => JobCategoryCreateWithoutWorkshopsInput)
    @ValidateNested()
    create!: JobCategoryCreateWithoutWorkshopsInput;
}
