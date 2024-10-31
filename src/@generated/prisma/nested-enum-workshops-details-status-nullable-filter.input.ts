import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopsDetailsStatus } from './workshops-details-status.enum';

@InputType()
export class NestedEnumWorkshopsDetailsStatusNullableFilter {

    @Field(() => WorkshopsDetailsStatus, {nullable:true})
    equals?: keyof typeof WorkshopsDetailsStatus;

    @Field(() => [WorkshopsDetailsStatus], {nullable:true})
    in?: Array<keyof typeof WorkshopsDetailsStatus>;

    @Field(() => [WorkshopsDetailsStatus], {nullable:true})
    notIn?: Array<keyof typeof WorkshopsDetailsStatus>;

    @Field(() => NestedEnumWorkshopsDetailsStatusNullableFilter, {nullable:true})
    not?: NestedEnumWorkshopsDetailsStatusNullableFilter;
}
