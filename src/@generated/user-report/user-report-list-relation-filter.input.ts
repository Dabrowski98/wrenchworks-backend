import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportWhereInput } from './user-report-where.input';

@InputType()
export class UserReportListRelationFilter {

    @Field(() => UserReportWhereInput, {nullable:true})
    every?: UserReportWhereInput;

    @Field(() => UserReportWhereInput, {nullable:true})
    some?: UserReportWhereInput;

    @Field(() => UserReportWhereInput, {nullable:true})
    none?: UserReportWhereInput;
}
