import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class JoinWorkshopRequestAvgAggregate {

    @Field(() => Float, {nullable:true})
    joinWorkshopRequestId?: number;

    @Field(() => Float, {nullable:true})
    receiverId?: number;

    @Field(() => Float, {nullable:true})
    workshopId?: number;

    @Field(() => Float, {nullable:true})
    employeeId?: number;

    @Field(() => Float, {nullable:true})
    createdBy?: number;

    @Field(() => Float, {nullable:true})
    updatedBy?: number;
}
