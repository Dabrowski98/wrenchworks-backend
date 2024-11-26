import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutWorkshopsInput } from './job-category-create-without-workshops.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCategoryCreateOrConnectWithoutWorkshopsInput } from './job-category-create-or-connect-without-workshops.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';

@InputType()
export class JobCategoryUncheckedCreateNestedManyWithoutWorkshopsInput {

    @Field(() => [JobCategoryCreateWithoutWorkshopsInput], {nullable:true})
    @Type(() => JobCategoryCreateWithoutWorkshopsInput)
    @ValidateNested()
    create?: Array<JobCategoryCreateWithoutWorkshopsInput>;

    @Field(() => [JobCategoryCreateOrConnectWithoutWorkshopsInput], {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutWorkshopsInput)
    @ValidateNested()
    connectOrCreate?: Array<JobCategoryCreateOrConnectWithoutWorkshopsInput>;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;
}
