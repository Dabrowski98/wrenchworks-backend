import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeUpdateInput } from './employee-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneEmployeeArgs {

    @Field(() => EmployeeUpdateInput, {nullable:false})
    @Type(() => EmployeeUpdateInput)
    @Validator.ValidateNested()
    data!: EmployeeUpdateInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>;
}
