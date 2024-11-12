import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { EmployeeUpdateManyWithoutPermissionSetNestedInput } from '../../employee/dto/employee-update-many-without-permission-set-nested.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateOneWithoutPermissionSetsNestedInput } from '../../workshop/dto/workshop-update-one-without-permission-sets-nested.input';

@InputType()
export class PermissionSetUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Set name must be a string' })
    @Validator.Length(2, 30, { message: 'Set name must be between 2 and 30 characters' })
    @Validator.IsOptional()
    setName?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canReadWorkshopDetails?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canUpdateWorkshopDetails?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canModifyWorkshopDetails?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canReadEmployees?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canUpdateEmployees?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canModifyEmployees?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canReadCustomers?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canUpdateCustomers?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canModifyCustomers?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canReadServices?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canUpdateServices?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canModifyServices?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canReadTasks?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canUpdateTasks?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canModifyTasks?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canReadReports?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canGenerateReports?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    canModifyPermissions?: boolean;

    @Field(() => EmployeeUpdateManyWithoutPermissionSetNestedInput, {nullable:true})
    @Type(() => EmployeeUpdateManyWithoutPermissionSetNestedInput)
    employees?: EmployeeUpdateManyWithoutPermissionSetNestedInput;

    @Field(() => WorkshopUpdateOneWithoutPermissionSetsNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneWithoutPermissionSetsNestedInput)
    workshop?: WorkshopUpdateOneWithoutPermissionSetsNestedInput;
}
