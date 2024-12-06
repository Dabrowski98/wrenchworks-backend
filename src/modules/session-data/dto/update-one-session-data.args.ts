import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionDataUpdateInput } from './session-data-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { SessionDataWhereUniqueInput } from './session-data-where-unique.input';

@ArgsType()
export class UpdateOneSessionDataArgs {

    @Field(() => SessionDataUpdateInput, {nullable:false})
    @Type(() => SessionDataUpdateInput)
    @ValidateNested()
    data!: SessionDataUpdateInput;

    @Field(() => SessionDataWhereUniqueInput, {nullable:false})
    @Type(() => SessionDataWhereUniqueInput)
    where!: Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId' | 'userId_deviceId'>;
}
