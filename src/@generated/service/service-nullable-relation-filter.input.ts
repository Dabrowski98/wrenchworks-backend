import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceWhereInput } from './service-where.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceNullableRelationFilter {

    @Field(() => ServiceWhereInput, {nullable:true})
    @Type(() => ServiceWhereInput)
    is?: ServiceWhereInput;

    @Field(() => ServiceWhereInput, {nullable:true})
    @Type(() => ServiceWhereInput)
    isNot?: ServiceWhereInput;
}
