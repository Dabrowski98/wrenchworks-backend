import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ServiceRequestJobScalarWhereWithAggregatesInput {

    @Field(() => [ServiceRequestJobScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ServiceRequestJobScalarWhereWithAggregatesInput>;

    @Field(() => [ServiceRequestJobScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ServiceRequestJobScalarWhereWithAggregatesInput>;

    @Field(() => [ServiceRequestJobScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ServiceRequestJobScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    serviceRequestId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    jobId?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
