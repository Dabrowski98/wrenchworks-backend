import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class WorkshopJobCategoryWorkshopIdCategoryIdCompoundUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    categoryId!: bigint | number;
}
