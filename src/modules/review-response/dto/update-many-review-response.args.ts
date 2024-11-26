import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewResponseUpdateManyMutationInput } from './review-response-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ReviewResponseWhereInput } from './review-response-where.input';

@ArgsType()
export class UpdateManyReviewResponseArgs {

    @Field(() => ReviewResponseUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewResponseUpdateManyMutationInput)
    @ValidateNested()
    data!: ReviewResponseUpdateManyMutationInput;

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    where?: ReviewResponseWhereInput;
}
