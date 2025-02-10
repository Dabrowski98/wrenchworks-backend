import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { EmployeeStatus } from '../../prisma/dto/employee-status.enum';
import { EmployeePermissionCreateNestedManyWithoutEmployeesInput } from '../../employee-permission/dto/employee-permission-create-nested-many-without-employees.input';
import { ServiceCreateNestedManyWithoutEmployeeInput } from '../../service/dto/service-create-nested-many-without-employee.input';
import { JoinWorkshopRequestCreateNestedManyWithoutEmployeeInput } from '../../join-workshop-request/dto/join-workshop-request-create-nested-many-without-employee.input';
import { ValidateNested } from 'class-validator';
import { TaskCreateNestedManyWithoutEmployeesInput } from '../../task/dto/task-create-nested-many-without-employees.input';
import { UserCreateNestedOneWithoutEmployeesInput } from '../../user/dto/user-create-nested-one-without-employees.input';

@InputType()
export class EmployeeCreateWithoutWorkshopInput {

    @HideField()
    employeeId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsString({ message: 'Nickname must be a string' })
    @Validator.Length(1, 30, { message: 'Nickname must be between 1 and 30 characters' })
    @Validator.Matches(/^[a-zA-Z0-9_-]+$/, { message: 'Nickname can only contain letters, numbers, underscores and hyphens' })
    @Validator.IsOptional()
    nickname?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'login must be a string' })
    @Validator.Length(3, 30, { message: 'login must be between 3 and 30 characters' })
    @Validator.Matches(/^[a-zA-Z0-9_-]+$/, { message: 'login can only contain letters, numbers, underscores and hyphens' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'login is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    login!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Password must be a string' })
    @Validator.MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: 'Password must contain at least one letter, one number and one special character' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Password is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    password!: string;

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

    @Field(() => EmployeePermissionCreateNestedManyWithoutEmployeesInput, {nullable:true})
    permissions?: EmployeePermissionCreateNestedManyWithoutEmployeesInput;

    @HideField()
    services?: ServiceCreateNestedManyWithoutEmployeeInput;

    @Field(() => JoinWorkshopRequestCreateNestedManyWithoutEmployeeInput, {nullable:true})
    @ValidateNested()
    joinWorkshopRequests?: JoinWorkshopRequestCreateNestedManyWithoutEmployeeInput;

    @HideField()
    tasks?: TaskCreateNestedManyWithoutEmployeesInput;

    @HideField()
    user?: UserCreateNestedOneWithoutEmployeesInput;
}
