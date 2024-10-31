import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateManyWorkshopInput } from './review-create-many-workshop.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCreateManyWorkshopInputEnvelope {

    @Field(() => [ReviewCreateManyWorkshopInput], {nullable:false})
    @Type(() => ReviewCreateManyWorkshopInput)
    data!: Array<ReviewCreateManyWorkshopInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
