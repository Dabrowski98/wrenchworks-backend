import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeeCount {

    @Field(() => Int, {nullable:false})
    services?: number;

    @Field(() => Int, {nullable:false})
    employeeTasks?: number;
}
