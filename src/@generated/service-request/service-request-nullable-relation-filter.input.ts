import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestWhereInput } from './service-request-where.input';

@InputType()
export class ServiceRequestNullableRelationFilter {

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    is?: ServiceRequestWhereInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    isNot?: ServiceRequestWhereInput;
}
