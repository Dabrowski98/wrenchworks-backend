import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceStatus } from './service-status.enum';
import { NestedEnumServiceStatusNullableFilter } from './nested-enum-service-status-nullable-filter.input';

@InputType()
export class EnumServiceStatusNullableFilter {

    @Field(() => ServiceStatus, {nullable:true})
    equals?: keyof typeof ServiceStatus;

    @Field(() => [ServiceStatus], {nullable:true})
    in?: Array<keyof typeof ServiceStatus>;

    @Field(() => [ServiceStatus], {nullable:true})
    notIn?: Array<keyof typeof ServiceStatus>;

    @Field(() => NestedEnumServiceStatusNullableFilter, {nullable:true})
    not?: NestedEnumServiceStatusNullableFilter;
}
