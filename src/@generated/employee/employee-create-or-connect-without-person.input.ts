import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutPersonInput } from './employee-create-without-person.input';

@InputType()
export class EmployeeCreateOrConnectWithoutPersonInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>;

    @Field(() => EmployeeCreateWithoutPersonInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutPersonInput)
    create!: EmployeeCreateWithoutPersonInput;
}
