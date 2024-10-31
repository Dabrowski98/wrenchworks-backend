import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceWhereInput } from './service-where.input';
import { Type } from 'class-transformer';
import { ServiceOrderByWithRelationInput } from './service-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ServiceScalarFieldEnum } from './service-scalar-field.enum';

@ArgsType()
export class FindFirstServiceArgs {

    @Field(() => ServiceWhereInput, {nullable:true})
    @Type(() => ServiceWhereInput)
    where?: ServiceWhereInput;

    @Field(() => [ServiceOrderByWithRelationInput], {nullable:true})
    @Type(() => ServiceOrderByWithRelationInput)
    orderBy?: Array<ServiceOrderByWithRelationInput>;

    @Field(() => ServiceWhereUniqueInput, {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    cursor?: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ServiceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ServiceScalarFieldEnum>;
}
