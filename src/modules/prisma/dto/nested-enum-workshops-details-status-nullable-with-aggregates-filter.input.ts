import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopsDetailsStatus } from './workshops-details-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumWorkshopsDetailsStatusNullableFilter } from './nested-enum-workshops-details-status-nullable-filter.input';

@InputType()
export class NestedEnumWorkshopsDetailsStatusNullableWithAggregatesFilter {

    @Field(() => WorkshopsDetailsStatus, {nullable:true})
    equals?: keyof typeof WorkshopsDetailsStatus;

    @Field(() => [WorkshopsDetailsStatus], {nullable:true})
    in?: Array<keyof typeof WorkshopsDetailsStatus>;

    @Field(() => [WorkshopsDetailsStatus], {nullable:true})
    notIn?: Array<keyof typeof WorkshopsDetailsStatus>;

    @Field(() => NestedEnumWorkshopsDetailsStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumWorkshopsDetailsStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumWorkshopsDetailsStatusNullableFilter, {nullable:true})
    _min?: NestedEnumWorkshopsDetailsStatusNullableFilter;

    @Field(() => NestedEnumWorkshopsDetailsStatusNullableFilter, {nullable:true})
    _max?: NestedEnumWorkshopsDetailsStatusNullableFilter;
}
