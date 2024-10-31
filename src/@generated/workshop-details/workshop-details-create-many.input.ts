import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { WorkshopsDetailsStatus } from '../prisma/workshops-details-status.enum';

@InputType()
export class WorkshopDetailsCreateManyInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    rating?: Decimal;

    @Field(() => String, {nullable:false})
    workshopName!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    telephoneNumber?: string;

    @Field(() => String, {nullable:true})
    logoURL?: string;

    @Field(() => WorkshopsDetailsStatus, {nullable:true})
    status?: keyof typeof WorkshopsDetailsStatus;

    @Field(() => String, {nullable:true})
    NIP?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
