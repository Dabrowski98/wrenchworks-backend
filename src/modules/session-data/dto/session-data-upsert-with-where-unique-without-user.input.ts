import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SessionDataWhereUniqueInput } from './session-data-where-unique.input';
import { Type } from 'class-transformer';
import { SessionDataUpdateWithoutUserInput } from './session-data-update-without-user.input';
import { ValidateNested } from 'class-validator';
import { SessionDataCreateWithoutUserInput } from './session-data-create-without-user.input';

@InputType()
export class SessionDataUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => SessionDataWhereUniqueInput, {nullable:false})
    @Type(() => SessionDataWhereUniqueInput)
    where!: Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId'>;

    @Field(() => SessionDataUpdateWithoutUserInput, {nullable:false})
    @Type(() => SessionDataUpdateWithoutUserInput)
    @ValidateNested()
    update!: SessionDataUpdateWithoutUserInput;

    @Field(() => SessionDataCreateWithoutUserInput, {nullable:false})
    @Type(() => SessionDataCreateWithoutUserInput)
    @ValidateNested()
    create!: SessionDataCreateWithoutUserInput;
}
