import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserReportSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    reportId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    reportedId?: true;
}
