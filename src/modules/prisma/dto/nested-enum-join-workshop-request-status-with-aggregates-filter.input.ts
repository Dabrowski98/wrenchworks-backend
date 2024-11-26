import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestStatus } from './join-workshop-request-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumJoinWorkshopRequestStatusFilter } from './nested-enum-join-workshop-request-status-filter.input';

@InputType()
export class NestedEnumJoinWorkshopRequestStatusWithAggregatesFilter {

    @Field(() => JoinWorkshopRequestStatus, {nullable:true})
    equals?: keyof typeof JoinWorkshopRequestStatus;

    @Field(() => [JoinWorkshopRequestStatus], {nullable:true})
    in?: Array<keyof typeof JoinWorkshopRequestStatus>;

    @Field(() => [JoinWorkshopRequestStatus], {nullable:true})
    notIn?: Array<keyof typeof JoinWorkshopRequestStatus>;

    @Field(() => NestedEnumJoinWorkshopRequestStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumJoinWorkshopRequestStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumJoinWorkshopRequestStatusFilter, {nullable:true})
    _min?: NestedEnumJoinWorkshopRequestStatusFilter;

    @Field(() => NestedEnumJoinWorkshopRequestStatusFilter, {nullable:true})
    _max?: NestedEnumJoinWorkshopRequestStatusFilter;
}
