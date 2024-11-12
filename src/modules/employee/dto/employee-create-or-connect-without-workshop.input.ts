import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutWorkshopInput } from './employee-create-without-workshop.input';

@InputType()
export class EmployeeCreateOrConnectWithoutWorkshopInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>;

    @Field(() => EmployeeCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutWorkshopInput)
    create!: EmployeeCreateWithoutWorkshopInput;
}
