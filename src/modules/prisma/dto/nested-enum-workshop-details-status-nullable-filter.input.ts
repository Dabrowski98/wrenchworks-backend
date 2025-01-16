import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDetailsStatus } from './workshop-details-status.enum';

@InputType()
export class NestedEnumWorkshopDetailsStatusNullableFilter {

    @Field(() => WorkshopDetailsStatus, {nullable:true})
    equals?: keyof typeof WorkshopDetailsStatus;

    @Field(() => [WorkshopDetailsStatus], {nullable:true})
    in?: Array<keyof typeof WorkshopDetailsStatus>;

    @Field(() => [WorkshopDetailsStatus], {nullable:true})
    notIn?: Array<keyof typeof WorkshopDetailsStatus>;

    @Field(() => NestedEnumWorkshopDetailsStatusNullableFilter, {nullable:true})
    not?: NestedEnumWorkshopDetailsStatusNullableFilter;
}
