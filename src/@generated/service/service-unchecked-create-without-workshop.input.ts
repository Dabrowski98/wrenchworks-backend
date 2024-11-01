import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServicesStatus } from '../prisma/services-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ServiceRequestUncheckedCreateNestedOneWithoutApprovedServiceInput } from '../service-request/service-request-unchecked-create-nested-one-without-approved-service.input';
import { TaskUncheckedCreateNestedManyWithoutServiceInput } from '../task/task-unchecked-create-nested-many-without-service.input';

@InputType()
export class ServiceUncheckedCreateWithoutWorkshopInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    customerId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint | number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ServicesStatus, {nullable:true})
    status?: keyof typeof ServicesStatus;

    @Field(() => Boolean, {nullable:true})
    payedOff?: boolean;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    paymentAmount?: Decimal;

    @Field(() => Date, {nullable:true})
    serviceStartDate?: Date | string;

    @Field(() => Date, {nullable:true})
    serviceEndDate?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceRequestUncheckedCreateNestedOneWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedCreateNestedOneWithoutApprovedServiceInput)
    serviceRequest?: ServiceRequestUncheckedCreateNestedOneWithoutApprovedServiceInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutServiceInput, {nullable:true})
    @Type(() => TaskUncheckedCreateNestedManyWithoutServiceInput)
    tasks?: TaskUncheckedCreateNestedManyWithoutServiceInput;
}
