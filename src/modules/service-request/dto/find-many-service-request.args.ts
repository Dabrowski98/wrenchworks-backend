import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestWhereInput } from './service-request-where.input';
import { Type } from 'class-transformer';
import { ServiceRequestOrderByWithRelationInput } from './service-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ServiceRequestScalarFieldEnum } from './service-request-scalar-field.enum';

@ArgsType()
export class FindManyServiceRequestArgs {

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    where?: ServiceRequestWhereInput;

    @Field(() => [ServiceRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ServiceRequestOrderByWithRelationInput>;

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ServiceRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ServiceRequestScalarFieldEnum>;
}
