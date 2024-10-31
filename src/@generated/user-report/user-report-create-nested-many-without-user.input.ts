import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportCreateWithoutUserInput } from './user-report-create-without-user.input';
import { Type } from 'class-transformer';
import { UserReportCreateOrConnectWithoutUserInput } from './user-report-create-or-connect-without-user.input';
import { UserReportCreateManyUserInputEnvelope } from './user-report-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserReportWhereUniqueInput } from './user-report-where-unique.input';

@InputType()
export class UserReportCreateNestedManyWithoutUserInput {

    @Field(() => [UserReportCreateWithoutUserInput], {nullable:true})
    @Type(() => UserReportCreateWithoutUserInput)
    create?: Array<UserReportCreateWithoutUserInput>;

    @Field(() => [UserReportCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserReportCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserReportCreateOrConnectWithoutUserInput>;

    @Field(() => UserReportCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserReportCreateManyUserInputEnvelope)
    createMany?: UserReportCreateManyUserInputEnvelope;

    @Field(() => [UserReportWhereUniqueInput], {nullable:true})
    @Type(() => UserReportWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>>;
}
