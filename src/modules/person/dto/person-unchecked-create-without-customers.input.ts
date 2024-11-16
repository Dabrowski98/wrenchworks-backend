import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { EmployeeUncheckedCreateNestedManyWithoutPersonInput } from '../../employee/dto/employee-unchecked-create-nested-many-without-person.input';
import { Type } from 'class-transformer';
import { ServiceRequestUncheckedCreateNestedManyWithoutPersonInput } from '../../service-request/dto/service-request-unchecked-create-nested-many-without-person.input';
import { UserUncheckedCreateNestedOneWithoutPersonInput } from '../../user/dto/user-unchecked-create-nested-one-without-person.input';
import { VehicleUncheckedCreateNestedManyWithoutPersonInput } from '../../vehicle/dto/vehicle-unchecked-create-nested-many-without-person.input';
import { WorkshopUncheckedCreateNestedManyWithoutPersonInput } from '../../workshop/dto/workshop-unchecked-create-nested-many-without-person.input';
import { CREATE, UPDATE } from 'src/constants/validation-groups';


@InputType()
export class PersonUncheckedCreateWithoutCustomersInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'First name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'First name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 30, { message: 'First name must be between 2 and 30 characters' })
    firstName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Last name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Last name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 30, { message: 'Last name must be between 2 and 30 characters' })
    lastName!: string;

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

    @Field(() => EmployeeUncheckedCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => EmployeeUncheckedCreateNestedManyWithoutPersonInput)
    employees?: EmployeeUncheckedCreateNestedManyWithoutPersonInput;

    @Field(() => ServiceRequestUncheckedCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutPersonInput)
    serviceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutPersonInput;

    @Field(() => UserUncheckedCreateNestedOneWithoutPersonInput, {nullable:true})
    @Type(() => UserUncheckedCreateNestedOneWithoutPersonInput)
    user?: UserUncheckedCreateNestedOneWithoutPersonInput;

    @Field(() => VehicleUncheckedCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => VehicleUncheckedCreateNestedManyWithoutPersonInput)
    vehicles?: VehicleUncheckedCreateNestedManyWithoutPersonInput;

    @Field(() => WorkshopUncheckedCreateNestedManyWithoutPersonInput, {nullable:true})
    @Type(() => WorkshopUncheckedCreateNestedManyWithoutPersonInput)
    workshops?: WorkshopUncheckedCreateNestedManyWithoutPersonInput;
}
