import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { CustomerUncheckedUpdateManyWithoutPersonNestedInput } from '../../customer/dto/customer-unchecked-update-many-without-person-nested.input';
import { Type } from 'class-transformer';
import { EmployeeUncheckedUpdateManyWithoutPersonNestedInput } from '../../employee/dto/employee-unchecked-update-many-without-person-nested.input';
import { ServiceRequestUncheckedUpdateManyWithoutPersonNestedInput } from '../../service-request/dto/service-request-unchecked-update-many-without-person-nested.input';
import { UserUncheckedUpdateOneWithoutPersonNestedInput } from '../../user/dto/user-unchecked-update-one-without-person-nested.input';
import { VehicleUncheckedUpdateManyWithoutPersonNestedInput } from '../../vehicle/dto/vehicle-unchecked-update-many-without-person-nested.input';
import { WorkshopUncheckedUpdateManyWithoutPersonNestedInput } from '../../workshop/dto/workshop-unchecked-update-many-without-person-nested.input';

@InputType()
export class PersonUncheckedUpdateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'First name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'First name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 30, { message: 'First name must be between 2 and 30 characters' })
    firstName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Last name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Last name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 30, { message: 'Last name must be between 2 and 30 characters' })
    lastName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]{8, 12}$/, { message: 'Invalid telephone number format' })
    @Validator.IsOptional()
    telephoneNumber?: string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => CustomerUncheckedUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => CustomerUncheckedUpdateManyWithoutPersonNestedInput)
    customers?: CustomerUncheckedUpdateManyWithoutPersonNestedInput;

    @Field(() => EmployeeUncheckedUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => EmployeeUncheckedUpdateManyWithoutPersonNestedInput)
    employees?: EmployeeUncheckedUpdateManyWithoutPersonNestedInput;

    @Field(() => ServiceRequestUncheckedUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutPersonNestedInput)
    serviceRequests?: ServiceRequestUncheckedUpdateManyWithoutPersonNestedInput;

    @Field(() => UserUncheckedUpdateOneWithoutPersonNestedInput, {nullable:true})
    @Type(() => UserUncheckedUpdateOneWithoutPersonNestedInput)
    user?: UserUncheckedUpdateOneWithoutPersonNestedInput;

    @Field(() => VehicleUncheckedUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => VehicleUncheckedUpdateManyWithoutPersonNestedInput)
    vehicles?: VehicleUncheckedUpdateManyWithoutPersonNestedInput;

    @Field(() => WorkshopUncheckedUpdateManyWithoutPersonNestedInput, {nullable:true})
    @Type(() => WorkshopUncheckedUpdateManyWithoutPersonNestedInput)
    workshops?: WorkshopUncheckedUpdateManyWithoutPersonNestedInput;
}
