import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserReportWhereUniqueInput } from './user-report-where-unique.input';
import { Type } from 'class-transformer';
import { UserReportCreateWithoutUserInput } from './user-report-create-without-user.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserReportCreateOrConnectWithoutUserInput {

    @Field(() => UserReportWhereUniqueInput, {nullable:false})
    @Type(() => UserReportWhereUniqueInput)
    where!: Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>;

    @Field(() => UserReportCreateWithoutUserInput, {nullable:false})
    @Type(() => UserReportCreateWithoutUserInput)
    @ValidateNested()
    create!: UserReportCreateWithoutUserInput;
}
