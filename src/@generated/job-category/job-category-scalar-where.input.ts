import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class JobCategoryScalarWhereInput {

    @Field(() => [JobCategoryScalarWhereInput], {nullable:true})
    AND?: Array<JobCategoryScalarWhereInput>;

    @Field(() => [JobCategoryScalarWhereInput], {nullable:true})
    OR?: Array<JobCategoryScalarWhereInput>;

    @Field(() => [JobCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<JobCategoryScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    categoryId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    parentId?: BigIntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPopular?: BoolFilter;
}
