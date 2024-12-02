import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars';
import { UsersStatus } from '../../prisma/dto/users-status.enum';
import { AddressCreateNestedOneWithoutUserInput } from '../../address/dto/address-create-nested-one-without-user.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { VehicleCreateNestedManyWithoutUserInput } from '../../vehicle/dto/vehicle-create-nested-many-without-user.input';
import { ServiceRequestCreateNestedManyWithoutUserInput } from '../../service-request/dto/service-request-create-nested-many-without-user.input';
import { CustomerCreateNestedManyWithoutUserInput } from '../../customer/dto/customer-create-nested-many-without-user.input';
import { WorkshopCreateNestedManyWithoutUserInput } from '../../workshop/dto/workshop-create-nested-many-without-user.input';
import { ReviewCreateNestedManyWithoutUserInput } from '../../review/dto/review-create-nested-many-without-user.input';
import { ReviewResponseCreateNestedManyWithoutUserInput } from '../../review-response/dto/review-response-create-nested-many-without-user.input';
import { UserReportCreateNestedManyWithoutUserInput } from '../../user-report/dto/user-report-create-nested-many-without-user.input';
import { JoinWorkshopRequestCreateNestedManyWithoutUserInput } from '../../join-workshop-request/dto/join-workshop-request-create-nested-many-without-user.input';
import { SessionDataCreateNestedManyWithoutUserInput } from '../../session-data/dto/session-data-create-nested-many-without-user.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';

@InputType()
export class UserCreateWithoutEmployeesInput {

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
    @Validator.Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: 'Password must contain at least one letter, one number and one special character' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Password is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    password!: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    @Validator.IsEmail({}, { message: 'Invalid email format' })
    @Validator.IsOptional()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]+$/, { message: 'Invalid telephone number format' })
    @Validator.IsOptional()
    telephoneNumber!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Avatar URL must be a string' })
    @Validator.Length(0, 255, { message: 'Avatar URL cannot exceed 255 characters' })
    @Validator.IsOptional()
    avatarURL?: string;

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

    @Field(() => AddressCreateNestedOneWithoutUserInput, {nullable:true})
    @ValidateNested()
    @Type(() => AddressCreateNestedOneWithoutUserInput)
    address?: AddressCreateNestedOneWithoutUserInput;

    }