import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class EmployeeTaskEmployeeIdTaskIdWorkshopIdCompoundUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    taskId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;
}
