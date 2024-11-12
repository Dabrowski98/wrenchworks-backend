import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeTaskWhereInput } from './employee-task-where.input';
import { Type } from 'class-transformer';
import { EmployeeTaskOrderByWithRelationInput } from './employee-task-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmployeeTaskScalarFieldEnum } from './employee-task-scalar-field.enum';

@ArgsType()
export class FindFirstEmployeeTaskArgs {

    @Field(() => EmployeeTaskWhereInput, {nullable:true})
    @Type(() => EmployeeTaskWhereInput)
    where?: EmployeeTaskWhereInput;

    @Field(() => [EmployeeTaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeTaskOrderByWithRelationInput>;

    @Field(() => EmployeeTaskWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EmployeeTaskScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeeTaskScalarFieldEnum>;
}
