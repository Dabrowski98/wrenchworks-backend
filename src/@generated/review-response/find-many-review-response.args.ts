import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewResponseWhereInput } from './review-response-where.input';
import { Type } from 'class-transformer';
import { ReviewResponseOrderByWithRelationInput } from './review-response-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewResponseScalarFieldEnum } from './review-response-scalar-field.enum';

@ArgsType()
export class FindManyReviewResponseArgs {

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    where?: ReviewResponseWhereInput;

    @Field(() => [ReviewResponseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewResponseOrderByWithRelationInput>;

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewResponseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewResponseScalarFieldEnum>;
}
