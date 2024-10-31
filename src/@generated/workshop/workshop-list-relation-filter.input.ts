import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopListRelationFilter {

    @Field(() => WorkshopWhereInput, {nullable:true})
    every?: WorkshopWhereInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    some?: WorkshopWhereInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    none?: WorkshopWhereInput;
}
