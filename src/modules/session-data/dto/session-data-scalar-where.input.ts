import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';

@InputType()
export class SessionDataScalarWhereInput {

    @Field(() => [SessionDataScalarWhereInput], {nullable:true})
    AND?: Array<SessionDataScalarWhereInput>;

    @Field(() => [SessionDataScalarWhereInput], {nullable:true})
    OR?: Array<SessionDataScalarWhereInput>;

    @Field(() => [SessionDataScalarWhereInput], {nullable:true})
    NOT?: Array<SessionDataScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    sessionDataId?: StringFilter;

    @Field(() => BigIntFilter, {nullable:true})
    userId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    refreshToken?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    deviceId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deviceName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deviceInfo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ipAddress?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    issuedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    revoked?: BoolFilter;
}
