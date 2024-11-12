import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserReportCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    reportId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    reportText?: true;

    @Field(() => Boolean, {nullable:true})
    reportedType?: true;

    @Field(() => Boolean, {nullable:true})
    reportedId?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
