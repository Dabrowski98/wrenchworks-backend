import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestStatus } from './service-request-status.enum';

@InputType()
export class NestedEnumServiceRequestStatusNullableFilter {

    @Field(() => ServiceRequestStatus, {nullable:true})
    equals?: keyof typeof ServiceRequestStatus;

    @Field(() => [ServiceRequestStatus], {nullable:true})
    in?: Array<keyof typeof ServiceRequestStatus>;

    @Field(() => [ServiceRequestStatus], {nullable:true})
    notIn?: Array<keyof typeof ServiceRequestStatus>;

    @Field(() => NestedEnumServiceRequestStatusNullableFilter, {nullable:true})
    not?: NestedEnumServiceRequestStatusNullableFilter;
}
