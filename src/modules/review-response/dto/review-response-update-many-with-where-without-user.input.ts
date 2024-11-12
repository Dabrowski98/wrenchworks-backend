import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseScalarWhereInput } from './review-response-scalar-where.input';
import { Type } from 'class-transformer';
import { ReviewResponseUpdateManyMutationInput } from './review-response-update-many-mutation.input';

@InputType()
export class ReviewResponseUpdateManyWithWhereWithoutUserInput {

    @Field(() => ReviewResponseScalarWhereInput, {nullable:false})
    @Type(() => ReviewResponseScalarWhereInput)
    where!: ReviewResponseScalarWhereInput;

    @Field(() => ReviewResponseUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewResponseUpdateManyMutationInput)
    data!: ReviewResponseUpdateManyMutationInput;
}
