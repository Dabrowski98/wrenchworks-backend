import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestWhereInput } from './join-workshop-request-where.input';

@InputType()
export class JoinWorkshopRequestListRelationFilter {

    @Field(() => JoinWorkshopRequestWhereInput, {nullable:true})
    every?: JoinWorkshopRequestWhereInput;

    @Field(() => JoinWorkshopRequestWhereInput, {nullable:true})
    some?: JoinWorkshopRequestWhereInput;

    @Field(() => JoinWorkshopRequestWhereInput, {nullable:true})
    none?: JoinWorkshopRequestWhereInput;
}
