import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCreateManyInput } from './review-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyReviewArgs {

    @Field(() => [ReviewCreateManyInput], {nullable:false})
    @Type(() => ReviewCreateManyInput)
    @ValidateNested()
    data!: Array<ReviewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
