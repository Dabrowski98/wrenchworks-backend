import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutChildrenInput } from './job-category-create-without-children.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateOrConnectWithoutChildrenInput } from './job-category-create-or-connect-without-children.input';
import { JobCategoryUpsertWithoutChildrenInput } from './job-category-upsert-without-children.input';
import { JobCategoryWhereInput } from './job-category-where.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { JobCategoryUpdateToOneWithWhereWithoutChildrenInput } from './job-category-update-to-one-with-where-without-children.input';

@InputType()
export class JobCategoryUpdateOneWithoutChildrenNestedInput {

    @Field(() => JobCategoryCreateWithoutChildrenInput, {nullable:true})
    @Type(() => JobCategoryCreateWithoutChildrenInput)
    create?: JobCategoryCreateWithoutChildrenInput;

    @Field(() => JobCategoryCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: JobCategoryCreateOrConnectWithoutChildrenInput;

    @Field(() => JobCategoryUpsertWithoutChildrenInput, {nullable:true})
    @Type(() => JobCategoryUpsertWithoutChildrenInput)
    upsert?: JobCategoryUpsertWithoutChildrenInput;

    @Field(() => JobCategoryWhereInput, {nullable:true})
    @Type(() => JobCategoryWhereInput)
    disconnect?: JobCategoryWhereInput;

    @Field(() => JobCategoryWhereInput, {nullable:true})
    @Type(() => JobCategoryWhereInput)
    delete?: JobCategoryWhereInput;

    @Field(() => JobCategoryWhereUniqueInput, {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;

    @Field(() => JobCategoryUpdateToOneWithWhereWithoutChildrenInput, {nullable:true})
    @Type(() => JobCategoryUpdateToOneWithWhereWithoutChildrenInput)
    update?: JobCategoryUpdateToOneWithWhereWithoutChildrenInput;
}
