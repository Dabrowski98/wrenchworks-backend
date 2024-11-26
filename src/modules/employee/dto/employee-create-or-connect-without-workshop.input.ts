import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutWorkshopInput } from './employee-create-without-workshop.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeeCreateOrConnectWithoutWorkshopInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>;

    @Field(() => EmployeeCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: EmployeeCreateWithoutWorkshopInput;
}
