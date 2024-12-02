import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SessionDataWhereUniqueInput } from './session-data-where-unique.input';
import { Type } from 'class-transformer';
import { SessionDataCreateWithoutUserInput } from './session-data-create-without-user.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class SessionDataCreateOrConnectWithoutUserInput {

    @Field(() => SessionDataWhereUniqueInput, {nullable:false})
    @Type(() => SessionDataWhereUniqueInput)
    where!: Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId'>;

    @Field(() => SessionDataCreateWithoutUserInput, {nullable:false})
    @Type(() => SessionDataCreateWithoutUserInput)
    @ValidateNested()
    create!: SessionDataCreateWithoutUserInput;
}
