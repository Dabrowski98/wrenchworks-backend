import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportCreateWithoutUserInput } from './user-report-create-without-user.input';
import { Type } from 'class-transformer';
import { UserReportCreateOrConnectWithoutUserInput } from './user-report-create-or-connect-without-user.input';
import { UserReportUpsertWithWhereUniqueWithoutUserInput } from './user-report-upsert-with-where-unique-without-user.input';
import { UserReportCreateManyUserInputEnvelope } from './user-report-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserReportWhereUniqueInput } from './user-report-where-unique.input';
import { UserReportUpdateWithWhereUniqueWithoutUserInput } from './user-report-update-with-where-unique-without-user.input';
import { UserReportUpdateManyWithWhereWithoutUserInput } from './user-report-update-many-with-where-without-user.input';
import { UserReportScalarWhereInput } from './user-report-scalar-where.input';

@InputType()
export class UserReportUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserReportCreateWithoutUserInput], {nullable:true})
    @Type(() => UserReportCreateWithoutUserInput)
    create?: Array<UserReportCreateWithoutUserInput>;

    @Field(() => [UserReportCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserReportCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserReportCreateOrConnectWithoutUserInput>;

    @Field(() => [UserReportUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserReportUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserReportUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserReportCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserReportCreateManyUserInputEnvelope)
    createMany?: UserReportCreateManyUserInputEnvelope;

    @Field(() => [UserReportWhereUniqueInput], {nullable:true})
    @Type(() => UserReportWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>>;

    @Field(() => [UserReportWhereUniqueInput], {nullable:true})
    @Type(() => UserReportWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>>;

    @Field(() => [UserReportWhereUniqueInput], {nullable:true})
    @Type(() => UserReportWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>>;

    @Field(() => [UserReportWhereUniqueInput], {nullable:true})
    @Type(() => UserReportWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>>;

    @Field(() => [UserReportUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserReportUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserReportUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserReportUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserReportUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserReportUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserReportScalarWhereInput], {nullable:true})
    @Type(() => UserReportScalarWhereInput)
    deleteMany?: Array<UserReportScalarWhereInput>;
}
