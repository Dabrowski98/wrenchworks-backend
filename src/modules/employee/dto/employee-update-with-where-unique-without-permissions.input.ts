import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutPermissionsInput } from './employee-update-without-permissions.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutPermissionsInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>;

    @Field(() => EmployeeUpdateWithoutPermissionsInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutPermissionsInput)
    data!: EmployeeUpdateWithoutPermissionsInput;
}
