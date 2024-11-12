import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkshopJobMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    workshopJobId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    jobId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopJobDescription?: true;

    @Field(() => Boolean, {nullable:true})
    minPrice?: true;

    @Field(() => Boolean, {nullable:true})
    maxPrice?: true;

    @Field(() => Boolean, {nullable:true})
    availability?: true;
}
