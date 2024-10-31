import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkshopJobCategoryCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    categoryId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
