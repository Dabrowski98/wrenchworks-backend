import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDetailsWhereInput } from './workshop-details-where.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopDetailsNullableRelationFilter {

    @Field(() => WorkshopDetailsWhereInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    is?: WorkshopDetailsWhereInput;

    @Field(() => WorkshopDetailsWhereInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    isNot?: WorkshopDetailsWhereInput;
}
