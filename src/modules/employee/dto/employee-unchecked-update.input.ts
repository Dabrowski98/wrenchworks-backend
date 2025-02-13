import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { EmployeeStatus } from '../../prisma/dto/employee-status.enum';
import { HideField } from '@nestjs/graphql';
import { EmployeePermissionUncheckedUpdateManyWithoutEmployeesNestedInput } from '../../employee-permission/dto/employee-permission-unchecked-update-many-without-employees-nested.input';
import { ServiceUncheckedUpdateManyWithoutEmployeeNestedInput } from '../../service/dto/service-unchecked-update-many-without-employee-nested.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestUncheckedUpdateManyWithoutEmployeeNestedInput } from '../../join-workshop-request/dto/join-workshop-request-unchecked-update-many-without-employee-nested.input';
import { TaskUncheckedUpdateManyWithoutEmployeesNestedInput } from '../../task/dto/task-unchecked-update-many-without-employees-nested.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class EmployeeUncheckedUpdateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    employeeId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsString({ message: 'Nickname must be a string' })
    @Validator.Length(1, 30, { message: 'Nickname must be between 1 and 30 characters' })
    @Validator.Matches(/^[a-zA-Z0-9_-]+$/, { message: 'Nickname can only contain letters, numbers, underscores and hyphens' })
    @Validator.IsOptional()
    nickname?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'login must be a string' })
    @Validator.Length(3, 30, { message: 'login must be between 3 and 30 characters' })
    @Validator.Matches(/^[a-zA-Z0-9_-]+$/, { message: 'login can only contain letters, numbers, underscores and hyphens' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'login is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    login?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Password must be a string' })
    @Validator.MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: 'Password must contain at least one letter, one number and one special character' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Password is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    password?: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => EmployeeStatus, {nullable:true})
    @Validator.IsBoolean({ message: 'Disabled must be a boolean' })
    @Validator.IsOptional()
    status?: keyof typeof EmployeeStatus;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Joined at must be a valid date' })
    @Validator.IsOptional()
    joinedAt?: Date | string;

    @Field(() => EmployeePermissionUncheckedUpdateManyWithoutEmployeesNestedInput, {nullable:true})
    permissions?: EmployeePermissionUncheckedUpdateManyWithoutEmployeesNestedInput;

    @Field(() => ServiceUncheckedUpdateManyWithoutEmployeeNestedInput, {nullable:true})
    @Type(() => ServiceUncheckedUpdateManyWithoutEmployeeNestedInput)
    @ValidateNested()
    @Type(() => ServiceUncheckedUpdateManyWithoutEmployeeNestedInput)
    services?: ServiceUncheckedUpdateManyWithoutEmployeeNestedInput;

    @Field(() => JoinWorkshopRequestUncheckedUpdateManyWithoutEmployeeNestedInput, {nullable:true})
    @ValidateNested()
    joinWorkshopRequests?: JoinWorkshopRequestUncheckedUpdateManyWithoutEmployeeNestedInput;

    @Field(() => TaskUncheckedUpdateManyWithoutEmployeesNestedInput, {nullable:true})
    @Type(() => TaskUncheckedUpdateManyWithoutEmployeesNestedInput)
    @ValidateNested()
    @Type(() => TaskUncheckedUpdateManyWithoutEmployeesNestedInput)
    tasks?: TaskUncheckedUpdateManyWithoutEmployeesNestedInput;
}