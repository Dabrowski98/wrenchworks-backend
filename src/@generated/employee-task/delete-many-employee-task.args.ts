import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeTaskWhereInput } from './employee-task-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEmployeeTaskArgs {

    @Field(() => EmployeeTaskWhereInput, {nullable:true})
    @Type(() => EmployeeTaskWhereInput)
    where?: EmployeeTaskWhereInput;
}
