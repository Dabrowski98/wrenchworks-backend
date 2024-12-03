import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { UsersStatus } from '../../prisma/dto/users-status.enum';
import { HideField } from '@nestjs/graphql';
import { VehicleUncheckedUpdateManyWithoutUserNestedInput } from '../../vehicle/dto/vehicle-unchecked-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestUncheckedUpdateManyWithoutUserNestedInput } from '../../service-request/dto/service-request-unchecked-update-many-without-user-nested.input';
import { EmployeeUncheckedUpdateManyWithoutUserNestedInput } from '../../employee/dto/employee-unchecked-update-many-without-user-nested.input';
import { WorkshopUncheckedUpdateManyWithoutUserNestedInput } from '../../workshop/dto/workshop-unchecked-update-many-without-user-nested.input';
import { ReviewUncheckedUpdateManyWithoutUserNestedInput } from '../../review/dto/review-unchecked-update-many-without-user-nested.input';
import { ReviewResponseUncheckedUpdateManyWithoutUserNestedInput } from '../../review-response/dto/review-response-unchecked-update-many-without-user-nested.input';
import { UserReportUncheckedUpdateManyWithoutUserNestedInput } from '../../user-report/dto/user-report-unchecked-update-many-without-user-nested.input';
import { JoinWorkshopRequestUncheckedUpdateManyWithoutUserNestedInput } from '../../join-workshop-request/dto/join-workshop-request-unchecked-update-many-without-user-nested.input';
import { SessionDataUncheckedUpdateManyWithoutUserNestedInput } from '../../session-data/dto/session-data-unchecked-update-many-without-user-nested.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class UserUncheckedUpdateWithoutCustomersInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Username must be a string' })
    @Validator.Length(3, 30, { message: 'Username must be between 3 and 30 characters' })
    @Validator.Matches(/^[a-zA-Z0-9_-]+$/, { message: 'Username can only contain letters, numbers, underscores and hyphens' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Username is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    username?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Password must be a string' })
    @Validator.MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: 'Password must contain at least one letter, one number and one special character' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Password is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    password?: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    @Validator.IsOptional()
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]+$/, { message: 'Invalid telephone number format' })
    @Validator.IsOptional()
    telephoneNumber?: string;

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

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'First name must be a string' })
    @Validator.Length(2, 30, { message: 'First name must be between 2 and 30 characters' })
    @Validator.IsOptional()
    firstName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Last name must be a string' })
    @Validator.Length(2, 30, { message: 'Last name must be between 2 and 30 characters' })
    @Validator.IsOptional()
    lastName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    addressId?: bigint | number;

    @Field(() => VehicleUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => VehicleUncheckedUpdateManyWithoutUserNestedInput)
    @ValidateNested()
    @Type(() => VehicleUncheckedUpdateManyWithoutUserNestedInput)
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ServiceRequestUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutUserNestedInput)
    @ValidateNested()
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutUserNestedInput)
    serviceRequests?: ServiceRequestUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => EmployeeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => EmployeeUncheckedUpdateManyWithoutUserNestedInput)
    @ValidateNested()
    @Type(() => EmployeeUncheckedUpdateManyWithoutUserNestedInput)
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => WorkshopUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => WorkshopUncheckedUpdateManyWithoutUserNestedInput)
    @ValidateNested()
    @Type(() => WorkshopUncheckedUpdateManyWithoutUserNestedInput)
    workshops?: WorkshopUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => ReviewUncheckedUpdateManyWithoutUserNestedInput)
    @ValidateNested()
    @Type(() => ReviewUncheckedUpdateManyWithoutUserNestedInput)
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewResponseUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedUpdateManyWithoutUserNestedInput)
    @ValidateNested()
    @Type(() => ReviewResponseUncheckedUpdateManyWithoutUserNestedInput)
    reviewResponses?: ReviewResponseUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserReportUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @ValidateNested()
    @Type(() => UserReportUncheckedUpdateManyWithoutUserNestedInput)
    userReports?: UserReportUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => JoinWorkshopRequestUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    joinWorkshopRequests?: JoinWorkshopRequestUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => SessionDataUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    sessionData?: SessionDataUncheckedUpdateManyWithoutUserNestedInput;
}