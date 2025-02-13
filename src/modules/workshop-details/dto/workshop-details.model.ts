import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { WorkshopDetailsStatus } from '../../prisma/dto/workshop-details-status.enum';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';

/**
 * This model provides additional details specific to a workshop such as its rating, description, and NIP.
 * It centralizes supplementary information that augments the basic workshop record.
 */
@ObjectType({description:'This model provides additional details specific to a workshop such as its rating, description, and NIP.\nIt centralizes supplementary information that augments the basic workshop record.'})
export class WorkshopDetails {

    /**
     * Identifier of the workshop details record
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop details record'})
    workshopId!: bigint;

    /**
     * Overall rating of the workshop
     * Note: Optional because it is set to 0.00 by default
     */
    @Field(() => GraphQLDecimal, {nullable:true,defaultValue:0,description:'Overall rating of the workshop\nNote: Optional because it is set to 0.00 by default'})
    rating!: Decimal | null;

    /**
     * Name of the workshop
     */
    @Field(() => String, {nullable:false,description:'Name of the workshop'})
    workshopName!: string;

    /**
     * Description of the workshop
     */
    @Field(() => String, {nullable:true,description:'Description of the workshop'})
    description!: string | null;

    /**
     * URL to workshop's logo image
     */
    @Field(() => String, {nullable:true,description:"URL to workshop's logo image"})
    logoURL!: string | null;

    /**
     * Current status of the workshop
     */
    @Field(() => WorkshopDetailsStatus, {nullable:true,defaultValue:'INACTIVE',description:'Current status of the workshop'})
    status!: keyof typeof WorkshopDetailsStatus | null;

    /**
     * Tax identification number
     */
    @Field(() => String, {nullable:true,description:'Tax identification number'})
    NIP!: string | null;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last update'})
    updatedAt!: Date | null;

    /**
     * Identifier of user who last updated the details
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who last updated the details'})
    updatedBy!: bigint | null;

    /**
     * Timestamp of deletion
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of deletion'})
    deletedAt!: Date | null;

    /**
     * Workshop associated with these details
     */
    @Field(() => Workshop, {nullable:false,description:'Workshop associated with these details'})
    @Type(() => Workshop)
    workshop?: Workshop;
}
