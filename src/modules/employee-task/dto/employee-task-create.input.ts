import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars'
import { EmployeeCreateNestedOneWithoutEmployeeTasksInput } from '../../employee/dto/employee-create-nested-one-without-employee-tasks.input';
import { Type } from 'class-transformer';
import { TaskCreateNestedOneWithoutTaskEmployeesInput } from '../../task/dto/task-create-nested-one-without-task-employees.input';
import { EmployeeEmployeeIdWorkshopIdCompoundUniqueInput } from 'src/modules/employee/dto';

@InputType()
export class EmployeeTaskCreateInput {

    @Field(() => EmployeeEmployeeIdWorkshopIdCompoundUniqueInput, { nullable: false })
    @Type(() => EmployeeEmployeeIdWorkshopIdCompoundUniqueInput)
    @Validator.IsNotEmpty({ message: 'Employee ID and Workshop ID are required' })
    @Validator.ValidateNested({ each: true })
    employeeId_WorkshopId?: EmployeeEmployeeIdWorkshopIdCompoundUniqueInput[];
    
    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    @Validator.IsNotEmpty({ message: 'Task ID is required' })
    taskId!: bigint | number;
}
