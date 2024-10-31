import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutPersonInput } from './employee-update-without-person.input';
import { EmployeeCreateWithoutPersonInput } from './employee-create-without-person.input';

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutPersonInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>;

    @Field(() => EmployeeUpdateWithoutPersonInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutPersonInput)
    update!: EmployeeUpdateWithoutPersonInput;

    @Field(() => EmployeeCreateWithoutPersonInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutPersonInput)
    create!: EmployeeCreateWithoutPersonInput;
}
