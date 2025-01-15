import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceStatus } from './workshop-device-status.enum';
import { NestedEnumWorkshopDeviceStatusNullableFilter } from './nested-enum-workshop-device-status-nullable-filter.input';

@InputType()
export class EnumWorkshopDeviceStatusNullableFilter {

    @Field(() => WorkshopDeviceStatus, {nullable:true})
    equals?: keyof typeof WorkshopDeviceStatus;

    @Field(() => [WorkshopDeviceStatus], {nullable:true})
    in?: Array<keyof typeof WorkshopDeviceStatus>;

    @Field(() => [WorkshopDeviceStatus], {nullable:true})
    notIn?: Array<keyof typeof WorkshopDeviceStatus>;

    @Field(() => NestedEnumWorkshopDeviceStatusNullableFilter, {nullable:true})
    not?: NestedEnumWorkshopDeviceStatusNullableFilter;
}
