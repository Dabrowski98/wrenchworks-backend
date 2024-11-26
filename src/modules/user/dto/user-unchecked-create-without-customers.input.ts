import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { UsersStatus } from '../../prisma/dto/users-status.enum';
import { HideField } from '@nestjs/graphql';
import { VehicleUncheckedCreateNestedManyWithoutUserInput } from '../../vehicle/dto/vehicle-unchecked-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestUncheckedCreateNestedManyWithoutUserInput } from '../../service-request/dto/service-request-unchecked-create-nested-many-without-user.input';
import { EmployeeUncheckedCreateNestedManyWithoutUserInput } from '../../employee/dto/employee-unchecked-create-nested-many-without-user.input';
import { WorkshopUncheckedCreateNestedManyWithoutUserInput } from '../../workshop/dto/workshop-unchecked-create-nested-many-without-user.input';
import { ReviewUncheckedCreateNestedManyWithoutUserInput } from '../../review/dto/review-unchecked-create-nested-many-without-user.input';
import { ReviewResponseUncheckedCreateNestedManyWithoutUserInput } from '../../review-response/dto/review-response-unchecked-create-nested-many-without-user.input';
import { UserReportUncheckedCreateNestedManyWithoutUserInput } from '../../user-report/dto/user-report-unchecked-create-nested-many-without-user.input';
import { JoinWorkshopRequestUncheckedCreateNestedManyWithoutUserInput } from '../../join-workshop-request/dto/join-workshop-request-unchecked-create-nested-many-without-user.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class UserUncheckedCreateWithoutCustomersInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Username must be a string' })
    @Validator.Length(3, 30, { message: 'Username must be between 3 and 30 characters' })
    @Validator.Matches(/^[a-zA-Z0-9_-]+$/, { message: 'Username can only contain letters, numbers, underscores and hyphens' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Username is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Password must be a string' })
    @Validator.MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8, }$/, { message: 'Password must contain at least one letter, one number and one special character' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Password is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    password!: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    @Validator.IsOptional()
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Avatar URL must be a string' })
    @Validator.Length(0, 255, { message: 'Avatar URL cannot exceed 255 characters' })
    @Validator.IsOptional()
    avatarURL?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is verified must be a boolean' })
    @Validator.IsOptional()
    isVerified?: boolean;

    @Field(() => UsersStatus, {nullable:true})
    @Validator.IsEnum(UsersStatus, { message: 'Invalid user status' })
    @Validator.IsOptional()
    status?: keyof typeof UsersStatus;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'First name must be a string' })
    @Validator.Length(2, 30, { message: 'First name must be between 2 and 30 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'First name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    firstName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Last name must be a string' })
    @Validator.Length(2, 30, { message: 'Last name must be between 2 and 30 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Last name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    lastName!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]{8, 12}$/, { message: 'Invalid telephone number format' })
    @Validator.IsOptional()
    telephoneNumber?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    addressId?: bigint | number;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => VehicleUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => VehicleUncheckedCreateNestedManyWithoutUserInput)
    @ValidateNested()
    @Type(() => VehicleUncheckedCreateNestedManyWithoutUserInput)
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ServiceRequestUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutUserInput)
    @ValidateNested()
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutUserInput)
    serviceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => EmployeeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => EmployeeUncheckedCreateNestedManyWithoutUserInput)
    @ValidateNested()
    @Type(() => EmployeeUncheckedCreateNestedManyWithoutUserInput)
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => WorkshopUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => WorkshopUncheckedCreateNestedManyWithoutUserInput)
    @ValidateNested()
    @Type(() => WorkshopUncheckedCreateNestedManyWithoutUserInput)
    workshops?: WorkshopUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => ReviewUncheckedCreateNestedManyWithoutUserInput)
    @ValidateNested()
    @Type(() => ReviewUncheckedCreateNestedManyWithoutUserInput)
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewResponseUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedCreateNestedManyWithoutUserInput)
    @ValidateNested()
    @Type(() => ReviewResponseUncheckedCreateNestedManyWithoutUserInput)
    reviewResponses?: ReviewResponseUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserReportUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @ValidateNested()
    @Type(() => UserReportUncheckedCreateNestedManyWithoutUserInput)
    userReports?: UserReportUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => JoinWorkshopRequestUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    joinWorkshopRequests?: JoinWorkshopRequestUncheckedCreateNestedManyWithoutUserInput;
}