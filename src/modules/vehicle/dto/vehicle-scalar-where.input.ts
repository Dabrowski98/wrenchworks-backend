import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';

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

    @Field(() => BigIntFilter, {nullable:true})
    personId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    modelId?: BigIntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;
}
