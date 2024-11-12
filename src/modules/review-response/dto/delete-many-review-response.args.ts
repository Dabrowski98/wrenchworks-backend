import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewResponseWhereInput } from './review-response-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReviewResponseArgs {

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    where?: ReviewResponseWhereInput;
}
