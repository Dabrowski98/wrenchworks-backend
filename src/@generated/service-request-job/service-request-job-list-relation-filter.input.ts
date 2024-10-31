import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestJobWhereInput } from './service-request-job-where.input';

@InputType()
export class ServiceRequestJobListRelationFilter {

    @Field(() => ServiceRequestJobWhereInput, {nullable:true})
    every?: ServiceRequestJobWhereInput;

    @Field(() => ServiceRequestJobWhereInput, {nullable:true})
    some?: ServiceRequestJobWhereInput;

    @Field(() => ServiceRequestJobWhereInput, {nullable:true})
    none?: ServiceRequestJobWhereInput;
}
