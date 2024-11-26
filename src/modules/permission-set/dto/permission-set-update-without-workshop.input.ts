import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { EmployeeUpdateManyWithoutPermissionSetNestedInput } from '../../employee/dto/employee-update-many-without-permission-set-nested.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class PermissionSetUpdateWithoutWorkshopInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Set name must be a string' })
    @Validator.Length(2, 30, { message: 'Set name must be between 2 and 30 characters' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Set name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    setName?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canReadWorkshopDetails?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canUpdateWorkshopDetails?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canModifyWorkshopDetails?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canReadEmployees?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canUpdateEmployees?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canModifyEmployees?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canReadCustomers?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canUpdateCustomers?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canModifyCustomers?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canReadServices?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canUpdateServices?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canModifyServices?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canReadTasks?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canUpdateTasks?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canModifyTasks?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canReadReports?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({  message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canGenerateReports?: boolean;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Permission must be a boolean' })
    @Validator.IsOptional()
    canModifyPermissions?: boolean;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    updatedBy?: bigint | number;

    @HideField()
    employees?: EmployeeUpdateManyWithoutPermissionSetNestedInput;
}
