import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class EmployeeTaskUncheckedCreateWithoutTaskInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
