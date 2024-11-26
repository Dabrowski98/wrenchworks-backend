import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from 'nestjs-graphql';

@InputType()
export class VehicleScalarWhereInput {

    @Field(() => [VehicleScalarWhereInput], {nullable:true})
    AND?: Array<VehicleScalarWhereInput>;

    @Field(() => [VehicleScalarWhereInput], {nullable:true})
    OR?: Array<VehicleScalarWhereInput>;

    @Field(() => [VehicleScalarWhereInput], {nullable:true})
    NOT?: Array<VehicleScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    vehicleId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    userId?: BigIntNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    guestId?: BigIntNullableFilter;

    @Field(() => BigIntFilter, {nullable:true})
    modelId?: BigIntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    deletedAt?: DateTimeNullableFilter;
}
