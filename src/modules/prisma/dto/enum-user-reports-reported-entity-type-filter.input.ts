import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportsReportedEntityType } from './user-reports-reported-entity-type.enum';
import { NestedEnumUserReportsReportedEntityTypeFilter } from './nested-enum-user-reports-reported-entity-type-filter.input';

@InputType()
export class EnumUserReportsReportedEntityTypeFilter {

    @Field(() => UserReportsReportedEntityType, {nullable:true})
    equals?: keyof typeof UserReportsReportedEntityType;

    @Field(() => [UserReportsReportedEntityType], {nullable:true})
    in?: Array<keyof typeof UserReportsReportedEntityType>;

    @Field(() => [UserReportsReportedEntityType], {nullable:true})
    notIn?: Array<keyof typeof UserReportsReportedEntityType>;

    @Field(() => NestedEnumUserReportsReportedEntityTypeFilter, {nullable:true})
    not?: NestedEnumUserReportsReportedEntityTypeFilter;
}
