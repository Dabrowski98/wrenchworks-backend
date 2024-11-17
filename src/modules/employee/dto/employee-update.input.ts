import { Field} from '@nestjs/graphql';
import * as Scalar from 'graphql-scalars'
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PermissionSetUpdateOneWithoutEmployeesNestedInput } from '../../permission-set/dto/permission-set-update-one-without-employees-nested.input';
import { WorkshopUpdateOneRequiredWithoutEmployeesNestedInput } from '../../workshop/dto/workshop-update-one-required-without-employees-nested.input';
import { Type } from 'class-transformer';
import { PersonUpdateOneRequiredWithoutEmployeesNestedInput } from '../../person/dto/person-update-one-required-without-employees-nested.input';
import { ServiceUpdateManyWithoutEmployeeNestedInput } from '../../service/dto/service-update-many-without-employee-nested.input';
import { EmployeeTaskUpdateManyWithoutEmployeeNestedInput } from '../../employee-task/dto/employee-task-update-many-without-employee-nested.input';

@InputType()
export class EmployeeUpdateInput {

    @Field(() => Date, { nullable: true })
    @Validator.IsOptional()
    @Validator.IsDate({ message: 'JoinedAt must be a valid date' })
    joinedAt?: Date;

    @Field(() => Scalar.GraphQLBigInt, { nullable: true })
    @Validator.IsOptional()
    permissionSetId?: bigint | number;
    
}
