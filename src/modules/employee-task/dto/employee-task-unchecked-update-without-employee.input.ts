import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';

@InputType()
export class EmployeeTaskUncheckedUpdateWithoutEmployeeInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    taskId?: bigint | number;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Created at must be a valid date' })
    createdAt?: Date | string;
}
