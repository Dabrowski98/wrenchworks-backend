import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AddressPersonScalarWhereInput {

    @Field(() => [AddressPersonScalarWhereInput], {nullable:true})
    AND?: Array<AddressPersonScalarWhereInput>;

    @Field(() => [AddressPersonScalarWhereInput], {nullable:true})
    OR?: Array<AddressPersonScalarWhereInput>;

    @Field(() => [AddressPersonScalarWhereInput], {nullable:true})
    NOT?: Array<AddressPersonScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    addressId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    personId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
