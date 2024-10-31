import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserReportWhereInput } from './user-report-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserReportArgs {

    @Field(() => UserReportWhereInput, {nullable:true})
    @Type(() => UserReportWhereInput)
    where?: UserReportWhereInput;
}
