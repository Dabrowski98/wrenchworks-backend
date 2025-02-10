import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { EmployeeStatus } from '../../prisma/dto/employee-status.enum';
import { EmployeePermissionUpdateManyWithoutEmployeesNestedInput } from '../../employee-permission/dto/employee-permission-update-many-without-employees-nested.input';
import { ServiceUpdateManyWithoutEmployeeNestedInput } from '../../service/dto/service-update-many-without-employee-nested.input';
import { JoinWorkshopRequestUpdateManyWithoutEmployeeNestedInput } from '../../join-workshop-request/dto/join-workshop-request-update-many-without-employee-nested.input';
import { ValidateNested } from 'class-validator';
import { TaskUpdateManyWithoutEmployeesNestedInput } from '../../task/dto/task-update-many-without-employees-nested.input';
import { UserUpdateOneWithoutEmployeesNestedInput } from '../../user/dto/user-update-one-without-employees-nested.input';

@InputType()
export class EmployeeUpdateWithoutWorkshopInput {

    @HideField()
    employeeId?: bigint | number;

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

    @HideField()
    refreshToken?: string;

    @HideField()
    status?: keyof typeof EmployeeStatus;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Joined at must be a valid date' })
    @Validator.IsOptional()
    joinedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    createdBy?: bigint | number;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    updatedBy?: bigint | number;

    @Field(() => EmployeePermissionUpdateManyWithoutEmployeesNestedInput, {nullable:true})
    permissions?: EmployeePermissionUpdateManyWithoutEmployeesNestedInput;

    @HideField()
    services?: ServiceUpdateManyWithoutEmployeeNestedInput;

    @Field(() => JoinWorkshopRequestUpdateManyWithoutEmployeeNestedInput, {nullable:true})
    @ValidateNested()
    joinWorkshopRequests?: JoinWorkshopRequestUpdateManyWithoutEmployeeNestedInput;

    @HideField()
    tasks?: TaskUpdateManyWithoutEmployeesNestedInput;

    @HideField()
    user?: UserUpdateOneWithoutEmployeesNestedInput;
}
