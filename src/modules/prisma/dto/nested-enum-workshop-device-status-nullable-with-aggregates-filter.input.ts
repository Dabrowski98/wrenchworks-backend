import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceStatus } from './workshop-device-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumWorkshopDeviceStatusNullableFilter } from './nested-enum-workshop-device-status-nullable-filter.input';

@InputType()
export class NestedEnumWorkshopDeviceStatusNullableWithAggregatesFilter {

    @Field(() => WorkshopDeviceStatus, {nullable:true})
    equals?: keyof typeof WorkshopDeviceStatus;

    @Field(() => [WorkshopDeviceStatus], {nullable:true})
    in?: Array<keyof typeof WorkshopDeviceStatus>;

    @Field(() => [WorkshopDeviceStatus], {nullable:true})
    notIn?: Array<keyof typeof WorkshopDeviceStatus>;

    @Field(() => NestedEnumWorkshopDeviceStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumWorkshopDeviceStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumWorkshopDeviceStatusNullableFilter, {nullable:true})
    _min?: NestedEnumWorkshopDeviceStatusNullableFilter;

    @Field(() => NestedEnumWorkshopDeviceStatusNullableFilter, {nullable:true})
    _max?: NestedEnumWorkshopDeviceStatusNullableFilter;
}
