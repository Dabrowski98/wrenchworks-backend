import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestsStatus } from './service-requests-status.enum';

@InputType()
export class NestedEnumServiceRequestsStatusNullableFilter {

    @Field(() => ServiceRequestsStatus, {nullable:true})
    equals?: keyof typeof ServiceRequestsStatus;

    @Field(() => [ServiceRequestsStatus], {nullable:true})
    in?: Array<keyof typeof ServiceRequestsStatus>;

    @Field(() => [ServiceRequestsStatus], {nullable:true})
    notIn?: Array<keyof typeof ServiceRequestsStatus>;

    @Field(() => NestedEnumServiceRequestsStatusNullableFilter, {nullable:true})
    not?: NestedEnumServiceRequestsStatusNullableFilter;
}
