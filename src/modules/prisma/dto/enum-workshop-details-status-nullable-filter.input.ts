import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDetailsStatus } from './workshop-details-status.enum';
import { NestedEnumWorkshopDetailsStatusNullableFilter } from './nested-enum-workshop-details-status-nullable-filter.input';

@InputType()
export class EnumWorkshopDetailsStatusNullableFilter {

    @Field(() => WorkshopDetailsStatus, {nullable:true})
    equals?: keyof typeof WorkshopDetailsStatus;

    @Field(() => [WorkshopDetailsStatus], {nullable:true})
    in?: Array<keyof typeof WorkshopDetailsStatus>;

    @Field(() => [WorkshopDetailsStatus], {nullable:true})
    notIn?: Array<keyof typeof WorkshopDetailsStatus>;

    @Field(() => NestedEnumWorkshopDetailsStatusNullableFilter, {nullable:true})
    not?: NestedEnumWorkshopDetailsStatusNullableFilter;
}
