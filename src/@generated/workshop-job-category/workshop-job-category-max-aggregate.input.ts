import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkshopJobCategoryMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    categoryId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
