import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AddressWorkshopScalarWhereInput {

    @Field(() => [AddressWorkshopScalarWhereInput], {nullable:true})
    AND?: Array<AddressWorkshopScalarWhereInput>;

    @Field(() => [AddressWorkshopScalarWhereInput], {nullable:true})
    OR?: Array<AddressWorkshopScalarWhereInput>;

    @Field(() => [AddressWorkshopScalarWhereInput], {nullable:true})
    NOT?: Array<AddressWorkshopScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    addressId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
