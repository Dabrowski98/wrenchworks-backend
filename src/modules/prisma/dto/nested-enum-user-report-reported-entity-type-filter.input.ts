import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportReportedEntityType } from './user-report-reported-entity-type.enum';

@InputType()
export class NestedEnumUserReportReportedEntityTypeFilter {

    @Field(() => UserReportReportedEntityType, {nullable:true})
    equals?: keyof typeof UserReportReportedEntityType;

    @Field(() => [UserReportReportedEntityType], {nullable:true})
    in?: Array<keyof typeof UserReportReportedEntityType>;

    @Field(() => [UserReportReportedEntityType], {nullable:true})
    notIn?: Array<keyof typeof UserReportReportedEntityType>;

    @Field(() => NestedEnumUserReportReportedEntityTypeFilter, {nullable:true})
    not?: NestedEnumUserReportReportedEntityTypeFilter;
}
