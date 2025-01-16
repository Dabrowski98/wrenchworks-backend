import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDetailsStatus } from './workshop-details-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumWorkshopDetailsStatusNullableFilter } from './nested-enum-workshop-details-status-nullable-filter.input';

@InputType()
export class NestedEnumWorkshopDetailsStatusNullableWithAggregatesFilter {

    @Field(() => WorkshopDetailsStatus, {nullable:true})
    equals?: keyof typeof WorkshopDetailsStatus;

    @Field(() => [WorkshopDetailsStatus], {nullable:true})
    in?: Array<keyof typeof WorkshopDetailsStatus>;

    @Field(() => [WorkshopDetailsStatus], {nullable:true})
    notIn?: Array<keyof typeof WorkshopDetailsStatus>;

    @Field(() => NestedEnumWorkshopDetailsStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumWorkshopDetailsStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumWorkshopDetailsStatusNullableFilter, {nullable:true})
    _min?: NestedEnumWorkshopDetailsStatusNullableFilter;

    @Field(() => NestedEnumWorkshopDetailsStatusNullableFilter, {nullable:true})
    _max?: NestedEnumWorkshopDetailsStatusNullableFilter;
}
