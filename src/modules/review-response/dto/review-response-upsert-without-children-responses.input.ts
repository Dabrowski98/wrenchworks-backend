import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseUpdateWithoutChildrenResponsesInput } from './review-response-update-without-children-responses.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ReviewResponseCreateWithoutChildrenResponsesInput } from './review-response-create-without-children-responses.input';
import { ReviewResponseWhereInput } from './review-response-where.input';

@InputType()
export class ReviewResponseUpsertWithoutChildrenResponsesInput {

    @Field(() => ReviewResponseUpdateWithoutChildrenResponsesInput, {nullable:false})
    @Type(() => ReviewResponseUpdateWithoutChildrenResponsesInput)
    @ValidateNested()
    update!: ReviewResponseUpdateWithoutChildrenResponsesInput;

    @Field(() => ReviewResponseCreateWithoutChildrenResponsesInput, {nullable:false})
    @Type(() => ReviewResponseCreateWithoutChildrenResponsesInput)
    @ValidateNested()
    create!: ReviewResponseCreateWithoutChildrenResponsesInput;

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    where?: ReviewResponseWhereInput;
}
