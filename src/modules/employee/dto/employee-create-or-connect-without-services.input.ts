import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutServicesInput } from './employee-create-without-services.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeeCreateOrConnectWithoutServicesInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>;

    @Field(() => EmployeeCreateWithoutServicesInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutServicesInput)
    @ValidateNested()
    create!: EmployeeCreateWithoutServicesInput;
}
