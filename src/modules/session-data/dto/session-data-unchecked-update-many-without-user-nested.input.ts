import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionDataCreateWithoutUserInput } from './session-data-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SessionDataCreateOrConnectWithoutUserInput } from './session-data-create-or-connect-without-user.input';
import { SessionDataUpsertWithWhereUniqueWithoutUserInput } from './session-data-upsert-with-where-unique-without-user.input';
import { SessionDataCreateManyUserInputEnvelope } from './session-data-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SessionDataWhereUniqueInput } from './session-data-where-unique.input';
import { SessionDataUpdateWithWhereUniqueWithoutUserInput } from './session-data-update-with-where-unique-without-user.input';
import { SessionDataUpdateManyWithWhereWithoutUserInput } from './session-data-update-many-with-where-without-user.input';
import { SessionDataScalarWhereInput } from './session-data-scalar-where.input';

@InputType()
export class SessionDataUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [SessionDataCreateWithoutUserInput], {nullable:true})
    @Type(() => SessionDataCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<SessionDataCreateWithoutUserInput>;

    @Field(() => [SessionDataCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SessionDataCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<SessionDataCreateOrConnectWithoutUserInput>;

    @Field(() => [SessionDataUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SessionDataUpsertWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    upsert?: Array<SessionDataUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SessionDataCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SessionDataCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: SessionDataCreateManyUserInputEnvelope;

    @Field(() => [SessionDataWhereUniqueInput], {nullable:true})
    @Type(() => SessionDataWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId' | 'userId_deviceId'>>;

    @Field(() => [SessionDataWhereUniqueInput], {nullable:true})
    @Type(() => SessionDataWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId' | 'userId_deviceId'>>;

    @Field(() => [SessionDataWhereUniqueInput], {nullable:true})
    @Type(() => SessionDataWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId' | 'userId_deviceId'>>;

    @Field(() => [SessionDataWhereUniqueInput], {nullable:true})
    @Type(() => SessionDataWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId' | 'userId_deviceId'>>;

    @Field(() => [SessionDataUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SessionDataUpdateWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    update?: Array<SessionDataUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SessionDataUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SessionDataUpdateManyWithWhereWithoutUserInput)
    @ValidateNested()
    updateMany?: Array<SessionDataUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SessionDataScalarWhereInput], {nullable:true})
    @Type(() => SessionDataScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<SessionDataScalarWhereInput>;
}
