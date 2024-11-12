import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';

@InputType()
export class PersonScalarWhereInput {

    @Field(() => [PersonScalarWhereInput], {nullable:true})
    AND?: Array<PersonScalarWhereInput>;

    @Field(() => [PersonScalarWhereInput], {nullable:true})
    OR?: Array<PersonScalarWhereInput>;

    @Field(() => [PersonScalarWhereInput], {nullable:true})
    NOT?: Array<PersonScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    personId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    telephoneNumber?: StringNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    addressId?: BigIntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;
}
