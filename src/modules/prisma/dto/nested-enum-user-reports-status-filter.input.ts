import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportsStatus } from './user-reports-status.enum';

@InputType()
export class NestedEnumUserReportsStatusFilter {

    @Field(() => UserReportsStatus, {nullable:true})
    equals?: keyof typeof UserReportsStatus;

    @Field(() => [UserReportsStatus], {nullable:true})
    in?: Array<keyof typeof UserReportsStatus>;

    @Field(() => [UserReportsStatus], {nullable:true})
    notIn?: Array<keyof typeof UserReportsStatus>;

    @Field(() => NestedEnumUserReportsStatusFilter, {nullable:true})
    not?: NestedEnumUserReportsStatusFilter;
}
