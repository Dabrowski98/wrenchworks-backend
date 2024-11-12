import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserReportWhereUniqueInput } from './user-report-where-unique.input';
import { Type } from 'class-transformer';
import { UserReportUpdateWithoutUserInput } from './user-report-update-without-user.input';
import { UserReportCreateWithoutUserInput } from './user-report-create-without-user.input';

@InputType()
export class UserReportUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserReportWhereUniqueInput, {nullable:false})
    @Type(() => UserReportWhereUniqueInput)
    where!: Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>;

    @Field(() => UserReportUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserReportUpdateWithoutUserInput)
    update!: UserReportUpdateWithoutUserInput;

    @Field(() => UserReportCreateWithoutUserInput, {nullable:false})
    @Type(() => UserReportCreateWithoutUserInput)
    create!: UserReportCreateWithoutUserInput;
}
