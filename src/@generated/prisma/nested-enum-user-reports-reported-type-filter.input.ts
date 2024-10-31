import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportsReportedType } from './user-reports-reported-type.enum';

@InputType()
export class NestedEnumUserReportsReportedTypeFilter {

    @Field(() => UserReportsReportedType, {nullable:true})
    equals?: keyof typeof UserReportsReportedType;

    @Field(() => [UserReportsReportedType], {nullable:true})
    in?: Array<keyof typeof UserReportsReportedType>;

    @Field(() => [UserReportsReportedType], {nullable:true})
    notIn?: Array<keyof typeof UserReportsReportedType>;

    @Field(() => NestedEnumUserReportsReportedTypeFilter, {nullable:true})
    not?: NestedEnumUserReportsReportedTypeFilter;
}
