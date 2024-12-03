import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SessionDataWhereUniqueInput } from './session-data-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneSessionDataArgs {

    @Field(() => SessionDataWhereUniqueInput, {nullable:false})
    @Type(() => SessionDataWhereUniqueInput)
    where!: Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId' | 'userId_deviceId'>;
}
