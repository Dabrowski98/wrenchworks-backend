import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserReportWhereUniqueInput } from './user-report-where-unique.input';
import { Type } from 'class-transformer';
import { UserReportCreateInput } from './user-report-create.input';
import { UserReportUpdateInput } from './user-report-update.input';

@ArgsType()
export class UpsertOneUserReportArgs {

    @Field(() => UserReportWhereUniqueInput, {nullable:false})
    @Type(() => UserReportWhereUniqueInput)
    where!: Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>;

    @Field(() => UserReportCreateInput, {nullable:false})
    @Type(() => UserReportCreateInput)
    create!: UserReportCreateInput;

    @Field(() => UserReportUpdateInput, {nullable:false})
    @Type(() => UserReportUpdateInput)
    update!: UserReportUpdateInput;
}
