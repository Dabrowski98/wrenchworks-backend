import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserReportUpdateInput } from './user-report-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserReportWhereUniqueInput } from './user-report-where-unique.input';

@ArgsType()
export class UpdateOneUserReportArgs {

    @Field(() => UserReportUpdateInput, {nullable:false})
    @Type(() => UserReportUpdateInput)
    data!: UserReportUpdateInput;

    @Field(() => UserReportWhereUniqueInput, {nullable:false})
    @Type(() => UserReportWhereUniqueInput)
    where!: Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>;
}
