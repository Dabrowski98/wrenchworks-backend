import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ServiceRequestJobScalarWhereInput {

    @Field(() => [ServiceRequestJobScalarWhereInput], {nullable:true})
    AND?: Array<ServiceRequestJobScalarWhereInput>;

    @Field(() => [ServiceRequestJobScalarWhereInput], {nullable:true})
    OR?: Array<ServiceRequestJobScalarWhereInput>;

    @Field(() => [ServiceRequestJobScalarWhereInput], {nullable:true})
    NOT?: Array<ServiceRequestJobScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    serviceRequestId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    jobId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
