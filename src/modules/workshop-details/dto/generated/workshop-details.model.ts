import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { WorkshopsDetailsStatus } from '../../../prisma/dto/generated/workshops-details-status.enum';
import { Workshop } from '../../../workshop/dto/generated/workshop.model';

@ObjectType()
export class WorkshopDetails {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    rating!: Decimal;

    @Field(() => String, {nullable:false})
    workshopName!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    telephoneNumber!: string | null;

    @Field(() => String, {nullable:true})
    logoURL!: string | null;

    @Field(() => WorkshopsDetailsStatus, {nullable:true,defaultValue:'active'})
    status!: keyof typeof WorkshopsDetailsStatus | null;

    @Field(() => String, {nullable:true})
    NIP!: string | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Workshop, {nullable:false})
    workshop?: Workshop;
}
