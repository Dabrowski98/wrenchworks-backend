import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeTaskWhereInput } from './employee-task-where.input';

@InputType()
export class EmployeeTaskListRelationFilter {

    @Field(() => EmployeeTaskWhereInput, {nullable:true})
    every?: EmployeeTaskWhereInput;

    @Field(() => EmployeeTaskWhereInput, {nullable:true})
    some?: EmployeeTaskWhereInput;

    @Field(() => EmployeeTaskWhereInput, {nullable:true})
    none?: EmployeeTaskWhereInput;
}
