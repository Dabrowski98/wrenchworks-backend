import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewResponseCreateManyInput } from './review-response-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyReviewResponseArgs {

    @Field(() => [ReviewResponseCreateManyInput], {nullable:false})
    @Type(() => ReviewResponseCreateManyInput)
    @ValidateNested()
    data!: Array<ReviewResponseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
