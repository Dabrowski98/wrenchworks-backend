import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewResponseCreateManyInput } from './review-response-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReviewResponseArgs {

    @Field(() => [ReviewResponseCreateManyInput], {nullable:false})
    @Type(() => ReviewResponseCreateManyInput)
    data!: Array<ReviewResponseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
