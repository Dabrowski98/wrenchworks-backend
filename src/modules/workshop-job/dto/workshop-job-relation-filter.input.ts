import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobWhereInput } from './workshop-job-where.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopJobRelationFilter {

    @Field(() => WorkshopJobWhereInput, {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    is?: WorkshopJobWhereInput;

    @Field(() => WorkshopJobWhereInput, {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    isNot?: WorkshopJobWhereInput;
}
