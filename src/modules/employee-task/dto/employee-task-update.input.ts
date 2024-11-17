import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars'
import { TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput } from '../../task/dto/task-update-one-required-without-task-employees-nested.input';
import { EmployeeEmployeeIdWorkshopIdCompoundUniqueInput } from 'src/modules/employee/dto';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeTaskUpdateInput {

    @Field(() => EmployeeEmployeeIdWorkshopIdCompoundUniqueInput, { nullable: true })
    @Type(() => EmployeeEmployeeIdWorkshopIdCompoundUniqueInput)
    @Validator.IsOptional()
    @Validator.ValidateNested({ each: true })
    employeeId_WorkshopId?: EmployeeEmployeeIdWorkshopIdCompoundUniqueInput[];
    
    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    taskId?: bigint | number;
}
