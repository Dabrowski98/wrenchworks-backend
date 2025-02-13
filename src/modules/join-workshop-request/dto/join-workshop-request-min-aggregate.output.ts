import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JoinWorkshopRequestStatus } from '../../prisma/dto/join-workshop-request-status.enum';

@ObjectType()
export class JoinWorkshopRequestMinAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    joinWorkshopRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    receiverId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    employeeId?: bigint | number;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => JoinWorkshopRequestStatus, {nullable:true})
    status?: keyof typeof JoinWorkshopRequestStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    createdBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    resolvedAt?: Date | string;
}
