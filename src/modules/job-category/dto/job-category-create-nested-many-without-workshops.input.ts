import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutWorkshopsInput } from './job-category-create-without-workshops.input';
import { HideField } from '@nestjs/graphql';
import { JobCategoryCreateOrConnectWithoutWorkshopsInput } from './job-category-create-or-connect-without-workshops.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class JobCategoryCreateNestedManyWithoutWorkshopsInput {

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;
}