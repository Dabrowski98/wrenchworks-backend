import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobWhereInput } from './workshop-job-where.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopJobListRelationFilter {

    @Field(() => WorkshopJobWhereInput, {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    every?: WorkshopJobWhereInput;

    @Field(() => WorkshopJobWhereInput, {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    some?: WorkshopJobWhereInput;

    @Field(() => WorkshopJobWhereInput, {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    none?: WorkshopJobWhereInput;
}
