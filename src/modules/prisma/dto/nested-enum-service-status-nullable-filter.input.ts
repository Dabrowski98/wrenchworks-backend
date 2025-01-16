import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceStatus } from './service-status.enum';

@InputType()
export class NestedEnumServiceStatusNullableFilter {

    @Field(() => ServiceStatus, {nullable:true})
    equals?: keyof typeof ServiceStatus;

    @Field(() => [ServiceStatus], {nullable:true})
    in?: Array<keyof typeof ServiceStatus>;

    @Field(() => [ServiceStatus], {nullable:true})
    notIn?: Array<keyof typeof ServiceStatus>;

    @Field(() => NestedEnumServiceStatusNullableFilter, {nullable:true})
    not?: NestedEnumServiceStatusNullableFilter;
}
