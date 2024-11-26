import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutUserInput } from './employee-update-without-user.input';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>;

    @Field(() => EmployeeUpdateWithoutUserInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutUserInput)
    @ValidateNested()
    update!: EmployeeUpdateWithoutUserInput;

    @Field(() => EmployeeCreateWithoutUserInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutUserInput)
    @ValidateNested()
    create!: EmployeeCreateWithoutUserInput;
}
