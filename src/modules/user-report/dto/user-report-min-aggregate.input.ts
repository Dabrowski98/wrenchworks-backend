import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserReportMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    reportId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    reportText?: true;

    @Field(() => Boolean, {nullable:true})
    reportType?: true;

    @Field(() => Boolean, {nullable:true})
    reportedEntityType?: true;

    @Field(() => Boolean, {nullable:true})
    reportedId?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    }