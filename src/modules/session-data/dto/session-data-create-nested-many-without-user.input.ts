import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionDataCreateWithoutUserInput } from './session-data-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SessionDataCreateOrConnectWithoutUserInput } from './session-data-create-or-connect-without-user.input';
import { SessionDataCreateManyUserInputEnvelope } from './session-data-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SessionDataWhereUniqueInput } from './session-data-where-unique.input';

@InputType()
export class SessionDataCreateNestedManyWithoutUserInput {

    @Field(() => [SessionDataCreateWithoutUserInput], {nullable:true})
    @Type(() => SessionDataCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<SessionDataCreateWithoutUserInput>;

    @Field(() => [SessionDataCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SessionDataCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<SessionDataCreateOrConnectWithoutUserInput>;

    @Field(() => SessionDataCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SessionDataCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: SessionDataCreateManyUserInputEnvelope;

    @Field(() => [SessionDataWhereUniqueInput], {nullable:true})
    @Type(() => SessionDataWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId'>>;
}
