import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestStatus } from './join-workshop-request-status.enum';

@InputType()
export class NestedEnumJoinWorkshopRequestStatusFilter {

    @Field(() => JoinWorkshopRequestStatus, {nullable:true})
    equals?: keyof typeof JoinWorkshopRequestStatus;

    @Field(() => [JoinWorkshopRequestStatus], {nullable:true})
    in?: Array<keyof typeof JoinWorkshopRequestStatus>;

    @Field(() => [JoinWorkshopRequestStatus], {nullable:true})
    notIn?: Array<keyof typeof JoinWorkshopRequestStatus>;

    @Field(() => NestedEnumJoinWorkshopRequestStatusFilter, {nullable:true})
    not?: NestedEnumJoinWorkshopRequestStatusFilter;
}
