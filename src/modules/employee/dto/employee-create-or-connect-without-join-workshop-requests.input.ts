import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutJoinWorkshopRequestsInput } from './employee-create-without-join-workshop-requests.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeeCreateOrConnectWithoutJoinWorkshopRequestsInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>;

    @Field(() => EmployeeCreateWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    create!: EmployeeCreateWithoutJoinWorkshopRequestsInput;
}
