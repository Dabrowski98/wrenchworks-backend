import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class JobScalarWhereInput {

    @Field(() => [JobScalarWhereInput], {nullable:true})
    AND?: Array<JobScalarWhereInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    OR?: Array<JobScalarWhereInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    NOT?: Array<JobScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    jobId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    categoryId?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPopular?: BoolFilter;
}
