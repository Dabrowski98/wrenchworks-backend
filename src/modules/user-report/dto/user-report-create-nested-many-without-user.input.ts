import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportCreateWithoutUserInput } from './user-report-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserReportCreateOrConnectWithoutUserInput } from './user-report-create-or-connect-without-user.input';
import { UserReportCreateManyUserInputEnvelope } from './user-report-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserReportWhereUniqueInput } from './user-report-where-unique.input';

@InputType()
export class UserReportCreateNestedManyWithoutUserInput {

    @Field(() => [UserReportCreateWithoutUserInput], {nullable:true})
    @Type(() => UserReportCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<UserReportCreateWithoutUserInput>;

    @Field(() => [UserReportCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserReportCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<UserReportCreateOrConnectWithoutUserInput>;

    @Field(() => UserReportCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserReportCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: UserReportCreateManyUserInputEnvelope;

    @Field(() => [UserReportWhereUniqueInput], {nullable:true})
    @Type(() => UserReportWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>>;
}
