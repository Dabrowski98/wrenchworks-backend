import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from 'nestjs-graphql';

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
    brand?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    updatedAt?: DateTimeNullableFilter;
}
