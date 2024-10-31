import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutChildInput } from './job-category-create-without-child.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateOrConnectWithoutChildInput } from './job-category-create-or-connect-without-child.input';
import { JobCategoryCreateManyChildInputEnvelope } from './job-category-create-many-child-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';

@InputType()
export class JobCategoryUncheckedCreateNestedManyWithoutChildInput {

    @Field(() => [JobCategoryCreateWithoutChildInput], {nullable:true})
    @Type(() => JobCategoryCreateWithoutChildInput)
    create?: Array<JobCategoryCreateWithoutChildInput>;

    @Field(() => [JobCategoryCreateOrConnectWithoutChildInput], {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutChildInput)
    connectOrCreate?: Array<JobCategoryCreateOrConnectWithoutChildInput>;

    @Field(() => JobCategoryCreateManyChildInputEnvelope, {nullable:true})
    @Type(() => JobCategoryCreateManyChildInputEnvelope)
    createMany?: JobCategoryCreateManyChildInputEnvelope;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;
}
