import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceStatus } from './workshop-device-status.enum';

@InputType()
export class NestedEnumWorkshopDeviceStatusNullableFilter {

    @Field(() => WorkshopDeviceStatus, {nullable:true})
    equals?: keyof typeof WorkshopDeviceStatus;

    @Field(() => [WorkshopDeviceStatus], {nullable:true})
    in?: Array<keyof typeof WorkshopDeviceStatus>;

    @Field(() => [WorkshopDeviceStatus], {nullable:true})
    notIn?: Array<keyof typeof WorkshopDeviceStatus>;

    @Field(() => NestedEnumWorkshopDeviceStatusNullableFilter, {nullable:true})
    not?: NestedEnumWorkshopDeviceStatusNullableFilter;
}
