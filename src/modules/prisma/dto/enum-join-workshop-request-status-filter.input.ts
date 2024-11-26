import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestStatus } from './join-workshop-request-status.enum';
import { NestedEnumJoinWorkshopRequestStatusFilter } from './nested-enum-join-workshop-request-status-filter.input';

@InputType()
export class EnumJoinWorkshopRequestStatusFilter {

    @Field(() => JoinWorkshopRequestStatus, {nullable:true})
    equals?: keyof typeof JoinWorkshopRequestStatus;

    @Field(() => [JoinWorkshopRequestStatus], {nullable:true})
    in?: Array<keyof typeof JoinWorkshopRequestStatus>;

    @Field(() => [JoinWorkshopRequestStatus], {nullable:true})
    notIn?: Array<keyof typeof JoinWorkshopRequestStatus>;

    @Field(() => NestedEnumJoinWorkshopRequestStatusFilter, {nullable:true})
    not?: NestedEnumJoinWorkshopRequestStatusFilter;
}
