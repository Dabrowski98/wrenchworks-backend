import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EmployeePermissionAvgAggregate {

    @Field(() => Float, {nullable:true})
    permissionId?: number;
}
