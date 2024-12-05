import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/dto/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/dto/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../../prisma/dto/bool-with-aggregates-filter.input';

@InputType()
export class SessionDataScalarWhereWithAggregatesInput {

    @Field(() => [SessionDataScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SessionDataScalarWhereWithAggregatesInput>;

    @Field(() => [SessionDataScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SessionDataScalarWhereWithAggregatesInput>;

    @Field(() => [SessionDataScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SessionDataScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sessionDataId?: StringWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    userId?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    refreshToken?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    deviceId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    deviceName?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    deviceInfo?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ipAddress?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    issuedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiresAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    revoked?: BoolWithAggregatesFilter;
}
