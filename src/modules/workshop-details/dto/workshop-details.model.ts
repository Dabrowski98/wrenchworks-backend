import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { WorkshopDetailsStatus } from '../../prisma/dto/workshop-details-status.enum';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';

@ObjectType()
export class WorkshopDetails {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    /**
     * Note: Optional because it is set to 0.00 by default
     */
    @Field(() => GraphQLDecimal, {nullable:true,defaultValue:0,description:'Note: Optional because it is set to 0.00 by default'})
    rating!: Decimal | null;

    @Field(() => String, {nullable:false})
    workshopName!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    logoURL!: string | null;

    @Field(() => WorkshopDetailsStatus, {nullable:true,defaultValue:'INACTIVE'})
    status!: keyof typeof WorkshopDetailsStatus | null;

    @Field(() => String, {nullable:true})
    NIP!: string | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:true})
    updatedBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Workshop, {nullable:false})
    @Type(() => Workshop)
    workshop?: Workshop;
}
