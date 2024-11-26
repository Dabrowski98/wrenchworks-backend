import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars';
import { UsersStatus } from '../../prisma/dto/users-status.enum';
import { AddressUpdateOneWithoutUserNestedInput } from '../../address/dto/address-update-one-without-user-nested.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { VehicleUpdateManyWithoutUserNestedInput } from '../../vehicle/dto/vehicle-update-many-without-user-nested.input';
import { ServiceRequestUpdateManyWithoutUserNestedInput } from '../../service-request/dto/service-request-update-many-without-user-nested.input';
import { CustomerUpdateManyWithoutUserNestedInput } from '../../customer/dto/customer-update-many-without-user-nested.input';
import { WorkshopUpdateManyWithoutUserNestedInput } from '../../workshop/dto/workshop-update-many-without-user-nested.input';
import { ReviewUpdateManyWithoutUserNestedInput } from '../../review/dto/review-update-many-without-user-nested.input';
import { ReviewResponseUpdateManyWithoutUserNestedInput } from '../../review-response/dto/review-response-update-many-without-user-nested.input';
import { UserReportUpdateManyWithoutUserNestedInput } from '../../user-report/dto/user-report-update-many-without-user-nested.input';
import { JoinWorkshopRequestUpdateManyWithoutUserNestedInput } from '../../join-workshop-request/dto/join-workshop-request-update-many-without-user-nested.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class UserUpdateWithoutEmployeesInput {

    @HideField()
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
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8, }$/, { message: 'Password must contain at least one letter, one number and one special character' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Password is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    password?: string;

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

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'First name must be a string' })
    @Validator.Length(2, 30, { message: 'First name must be between 2 and 30 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'First name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    firstName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Last name must be a string' })
    @Validator.Length(2, 30, { message: 'Last name must be between 2 and 30 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Last name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    lastName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]{8, 12}$/, { message: 'Invalid telephone number format' })
    @Validator.IsOptional()
    telephoneNumber?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => AddressUpdateOneWithoutUserNestedInput, {nullable:true})
    @ValidateNested()
    @Type(() => AddressUpdateOneWithoutUserNestedInput)
    address?: AddressUpdateOneWithoutUserNestedInput;

    @HideField()
    vehicles?: VehicleUpdateManyWithoutUserNestedInput;

    @HideField()
    serviceRequests?: ServiceRequestUpdateManyWithoutUserNestedInput;

    @HideField()
    customers?: CustomerUpdateManyWithoutUserNestedInput;

    @HideField()
    workshops?: WorkshopUpdateManyWithoutUserNestedInput;

    @HideField()
    reviews?: ReviewUpdateManyWithoutUserNestedInput;

    @HideField()
    reviewResponses?: ReviewResponseUpdateManyWithoutUserNestedInput;

    @HideField()
    userReports?: UserReportUpdateManyWithoutUserNestedInput;

    @HideField()
    joinWorkshopRequests?: JoinWorkshopRequestUpdateManyWithoutUserNestedInput;
}