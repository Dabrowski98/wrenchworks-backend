import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SessionDataWhereUniqueInput } from './session-data-where-unique.input';
import { Type } from 'class-transformer';
import { SessionDataUpdateWithoutUserInput } from './session-data-update-without-user.input';

@InputType()
export class SessionDataUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => SessionDataWhereUniqueInput, {nullable:false})
    @Type(() => SessionDataWhereUniqueInput)
    where!: Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId' | 'userId_deviceId'>;

    @Field(() => SessionDataUpdateWithoutUserInput, {nullable:false})
    @Type(() => SessionDataUpdateWithoutUserInput)
    data!: SessionDataUpdateWithoutUserInput;
}
