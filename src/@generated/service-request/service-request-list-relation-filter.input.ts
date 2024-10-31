import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestWhereInput } from './service-request-where.input';

@InputType()
export class ServiceRequestListRelationFilter {

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    every?: ServiceRequestWhereInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    some?: ServiceRequestWhereInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    none?: ServiceRequestWhereInput;
}
