import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserReportUpdateInput } from './user-report-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserReportWhereUniqueInput } from './user-report-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneUserReportArgs {

    @Field(() => UserReportUpdateInput, {nullable:false})
    @Type(() => UserReportUpdateInput)
    @Validator.ValidateNested()
    data!: UserReportUpdateInput;

    @Field(() => UserReportWhereUniqueInput, {nullable:false})
    @Type(() => UserReportWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>;
}
