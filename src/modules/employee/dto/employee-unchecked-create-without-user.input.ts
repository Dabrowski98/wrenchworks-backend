import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { ServiceUncheckedCreateNestedManyWithoutEmployeeInput } from '../../service/dto/service-unchecked-create-nested-many-without-employee.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestUncheckedCreateNestedManyWithoutEmployeeInput } from '../../join-workshop-request/dto/join-workshop-request-unchecked-create-nested-many-without-employee.input';
import { TaskUncheckedCreateNestedManyWithoutEmployeesInput } from '../../task/dto/task-unchecked-create-nested-many-without-employees.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class EmployeeUncheckedCreateWithoutUserInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    employeeId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

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

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => Boolean, {nullable:false})
    @Validator.IsBoolean({ message: 'Disabled must be a boolean' })
    @Validator.IsOptional()
    status!: boolean;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Joined at must be a valid date' })
    @Validator.IsOptional()
    joinedAt?: Date | string;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    @Type(() => ServiceUncheckedCreateNestedManyWithoutEmployeeInput)
    @ValidateNested()
    @Type(() => ServiceUncheckedCreateNestedManyWithoutEmployeeInput)
    services?: ServiceUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => JoinWorkshopRequestUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    @ValidateNested()
    joinWorkshopRequests?: JoinWorkshopRequestUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutEmployeesInput, {nullable:true})
    @Type(() => TaskUncheckedCreateNestedManyWithoutEmployeesInput)
    @ValidateNested()
    @Type(() => TaskUncheckedCreateNestedManyWithoutEmployeesInput)
    tasks?: TaskUncheckedCreateNestedManyWithoutEmployeesInput;
}