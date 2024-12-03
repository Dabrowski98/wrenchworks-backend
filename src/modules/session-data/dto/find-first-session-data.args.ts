import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionDataWhereInput } from './session-data-where.input';
import { Type } from 'class-transformer';
import { SessionDataOrderByWithRelationInput } from './session-data-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SessionDataWhereUniqueInput } from './session-data-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SessionDataScalarFieldEnum } from './session-data-scalar-field.enum';

@ArgsType()
export class FindFirstSessionDataArgs {

    @Field(() => SessionDataWhereInput, {nullable:true})
    @Type(() => SessionDataWhereInput)
    where?: SessionDataWhereInput;

    @Field(() => [SessionDataOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionDataOrderByWithRelationInput>;

    @Field(() => SessionDataWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId' | 'userId_deviceId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SessionDataScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SessionDataScalarFieldEnum>;
}
