import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutPermissionSetInput } from './employee-update-without-permission-set.input';
import { EmployeeCreateWithoutPermissionSetInput } from './employee-create-without-permission-set.input';

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutPermissionSetInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>;

    @Field(() => EmployeeUpdateWithoutPermissionSetInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutPermissionSetInput)
    update!: EmployeeUpdateWithoutPermissionSetInput;

    @Field(() => EmployeeCreateWithoutPermissionSetInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutPermissionSetInput)
    create!: EmployeeCreateWithoutPermissionSetInput;
}
