import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EmployeeCreateManyWorkshopInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint | number;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    permissionSetId?: bigint | number;
}
