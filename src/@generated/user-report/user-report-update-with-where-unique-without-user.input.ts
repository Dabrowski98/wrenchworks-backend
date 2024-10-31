import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserReportWhereUniqueInput } from './user-report-where-unique.input';
import { Type } from 'class-transformer';
import { UserReportUpdateWithoutUserInput } from './user-report-update-without-user.input';

@InputType()
export class UserReportUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserReportWhereUniqueInput, {nullable:false})
    @Type(() => UserReportWhereUniqueInput)
    where!: Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>;

    @Field(() => UserReportUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserReportUpdateWithoutUserInput)
    data!: UserReportUpdateWithoutUserInput;
}
