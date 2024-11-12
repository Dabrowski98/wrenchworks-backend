import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportsReportedType } from './user-reports-reported-type.enum';
import { NestedEnumUserReportsReportedTypeFilter } from './nested-enum-user-reports-reported-type-filter.input';

@InputType()
export class EnumUserReportsReportedTypeFilter {

    @Field(() => UserReportsReportedType, {nullable:true})
    equals?: keyof typeof UserReportsReportedType;

    @Field(() => [UserReportsReportedType], {nullable:true})
    in?: Array<keyof typeof UserReportsReportedType>;

    @Field(() => [UserReportsReportedType], {nullable:true})
    notIn?: Array<keyof typeof UserReportsReportedType>;

    @Field(() => NestedEnumUserReportsReportedTypeFilter, {nullable:true})
    not?: NestedEnumUserReportsReportedTypeFilter;
}
