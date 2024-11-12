import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopsDetailsStatus } from './workshops-details-status.enum';
import { NestedEnumWorkshopsDetailsStatusNullableFilter } from './nested-enum-workshops-details-status-nullable-filter.input';

@InputType()
export class EnumWorkshopsDetailsStatusNullableFilter {

    @Field(() => WorkshopsDetailsStatus, {nullable:true})
    equals?: keyof typeof WorkshopsDetailsStatus;

    @Field(() => [WorkshopsDetailsStatus], {nullable:true})
    in?: Array<keyof typeof WorkshopsDetailsStatus>;

    @Field(() => [WorkshopsDetailsStatus], {nullable:true})
    notIn?: Array<keyof typeof WorkshopsDetailsStatus>;

    @Field(() => NestedEnumWorkshopsDetailsStatusNullableFilter, {nullable:true})
    not?: NestedEnumWorkshopsDetailsStatusNullableFilter;
}
