import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PermissionSetCreateNestedOneWithoutEmployeesInput } from '../../permission-set/dto/permission-set-create-nested-one-without-employees.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ServiceCreateNestedManyWithoutEmployeeInput } from '../../service/dto/service-create-nested-many-without-employee.input';
import { TaskCreateNestedManyWithoutEmployeesInput } from '../../task/dto/task-create-nested-many-without-employees.input';
import { UserCreateNestedOneWithoutEmployeesInput } from '../../user/dto/user-create-nested-one-without-employees.input';
import { WorkshopCreateNestedOneWithoutEmployeesInput } from '../../workshop/dto/workshop-create-nested-one-without-employees.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class EmployeeCreateWithoutJoinWorkshopRequestsInput {

    @HideField()
    employeeId?: bigint | number;

    @Field(() => String, {nullable:true})
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
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8, }$/, { message: 'Password must contain at least one letter, one number and one special character' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Password is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    password!: string;

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

    @Field(() => PermissionSetCreateNestedOneWithoutEmployeesInput, {nullable:true})
    @ValidateNested()
    @Type(() => PermissionSetCreateNestedOneWithoutEmployeesInput)
    permissionSet?: PermissionSetCreateNestedOneWithoutEmployeesInput;

    @HideField()
    services?: ServiceCreateNestedManyWithoutEmployeeInput;

    @HideField()
    tasks?: TaskCreateNestedManyWithoutEmployeesInput;

    @HideField()
    user?: UserCreateNestedOneWithoutEmployeesInput;

    @Field(() => WorkshopCreateNestedOneWithoutEmployeesInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutEmployeesInput)
    @ValidateNested()
    @Type(() => WorkshopCreateNestedOneWithoutEmployeesInput)
    workshop!: WorkshopCreateNestedOneWithoutEmployeesInput;
}