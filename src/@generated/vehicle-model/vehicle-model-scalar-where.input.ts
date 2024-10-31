import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class VehicleModelScalarWhereInput {

    @Field(() => [VehicleModelScalarWhereInput], {nullable:true})
    AND?: Array<VehicleModelScalarWhereInput>;

    @Field(() => [VehicleModelScalarWhereInput], {nullable:true})
    OR?: Array<VehicleModelScalarWhereInput>;

    @Field(() => [VehicleModelScalarWhereInput], {nullable:true})
    NOT?: Array<VehicleModelScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    modelId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    modelName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    brandName?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;
}
