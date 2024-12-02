import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutJoinWorkshopRequestsInput } from './employee-create-without-join-workshop-requests.input';
import { HideField } from '@nestjs/graphql';
import { EmployeeCreateOrConnectWithoutJoinWorkshopRequestsInput } from './employee-create-or-connect-without-join-workshop-requests.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeeCreateNestedOneWithoutJoinWorkshopRequestsInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>;
}