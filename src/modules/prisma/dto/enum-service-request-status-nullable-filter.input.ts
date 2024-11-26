import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestStatus } from './service-request-status.enum';
import { NestedEnumServiceRequestStatusNullableFilter } from './nested-enum-service-request-status-nullable-filter.input';

@InputType()
export class EnumServiceRequestStatusNullableFilter {

    @Field(() => ServiceRequestStatus, {nullable:true})
    equals?: keyof typeof ServiceRequestStatus;

    @Field(() => [ServiceRequestStatus], {nullable:true})
    in?: Array<keyof typeof ServiceRequestStatus>;

    @Field(() => [ServiceRequestStatus], {nullable:true})
    notIn?: Array<keyof typeof ServiceRequestStatus>;

    @Field(() => NestedEnumServiceRequestStatusNullableFilter, {nullable:true})
    not?: NestedEnumServiceRequestStatusNullableFilter;
}
