import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateManyParentResponseInput } from './review-response-create-many-parent-response.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewResponseCreateManyParentResponseInputEnvelope {

    @Field(() => [ReviewResponseCreateManyParentResponseInput], {nullable:false})
    @Type(() => ReviewResponseCreateManyParentResponseInput)
    data!: Array<ReviewResponseCreateManyParentResponseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
