import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserReportWhereUniqueInput } from './user-report-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUserReportArgs {

    @Field(() => UserReportWhereUniqueInput, {nullable:false})
    @Type(() => UserReportWhereUniqueInput)
    where!: Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>;
}
