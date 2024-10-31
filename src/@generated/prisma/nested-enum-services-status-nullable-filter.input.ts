import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServicesStatus } from './services-status.enum';

@InputType()
export class NestedEnumServicesStatusNullableFilter {

    @Field(() => ServicesStatus, {nullable:true})
    equals?: keyof typeof ServicesStatus;

    @Field(() => [ServicesStatus], {nullable:true})
    in?: Array<keyof typeof ServicesStatus>;

    @Field(() => [ServicesStatus], {nullable:true})
    notIn?: Array<keyof typeof ServicesStatus>;

    @Field(() => NestedEnumServicesStatusNullableFilter, {nullable:true})
    not?: NestedEnumServicesStatusNullableFilter;
}
