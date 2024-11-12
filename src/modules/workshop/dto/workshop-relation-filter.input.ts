import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopRelationFilter {

    @Field(() => WorkshopWhereInput, {nullable:true})
    is?: WorkshopWhereInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    isNot?: WorkshopWhereInput;
}
