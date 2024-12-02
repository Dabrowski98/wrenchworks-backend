import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SessionDataWhereUniqueInput } from './session-data-where-unique.input';
import { Type } from 'class-transformer';
import { SessionDataCreateInput } from './session-data-create.input';
import { SessionDataUpdateInput } from './session-data-update.input';

@ArgsType()
export class UpsertOneSessionDataArgs {

    @Field(() => SessionDataWhereUniqueInput, {nullable:false})
    @Type(() => SessionDataWhereUniqueInput)
    where!: Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId'>;

    @Field(() => SessionDataCreateInput, {nullable:false})
    @Type(() => SessionDataCreateInput)
    create!: SessionDataCreateInput;

    @Field(() => SessionDataUpdateInput, {nullable:false})
    @Type(() => SessionDataUpdateInput)
    update!: SessionDataUpdateInput;
}
