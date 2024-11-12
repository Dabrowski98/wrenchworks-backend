import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class PermissionSetSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    permissionSetId?: number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;
}
