import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EmployeeAvgAggregate {

    @Field(() => Float, {nullable:true})
    employeeId?: number;

    @Field(() => Float, {nullable:true})
    workshopId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    permissionSetId?: number;

    @Field(() => Float, {nullable:true})
    createdBy?: number;

    @Field(() => Float, {nullable:true})
    updatedBy?: number;
}
