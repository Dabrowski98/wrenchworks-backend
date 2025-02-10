import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutPermissionsInput } from './employee-create-without-permissions.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeeCreateOrConnectWithoutPermissionsInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>;

    @Field(() => EmployeeCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutPermissionsInput)
    @ValidateNested()
    create!: EmployeeCreateWithoutPermissionsInput;
}
