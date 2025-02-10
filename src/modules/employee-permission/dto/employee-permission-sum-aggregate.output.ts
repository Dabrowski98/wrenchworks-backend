import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class EmployeePermissionSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    permissionId?: bigint | number;
}
