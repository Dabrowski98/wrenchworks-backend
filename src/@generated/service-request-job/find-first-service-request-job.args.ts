import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestJobWhereInput } from './service-request-job-where.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobOrderByWithRelationInput } from './service-request-job-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ServiceRequestJobScalarFieldEnum } from './service-request-job-scalar-field.enum';

@ArgsType()
export class FindFirstServiceRequestJobArgs {

    @Field(() => ServiceRequestJobWhereInput, {nullable:true})
    @Type(() => ServiceRequestJobWhereInput)
    where?: ServiceRequestJobWhereInput;

    @Field(() => [ServiceRequestJobOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ServiceRequestJobOrderByWithRelationInput>;

    @Field(() => ServiceRequestJobWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ServiceRequestJobScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ServiceRequestJobScalarFieldEnum>;
}
