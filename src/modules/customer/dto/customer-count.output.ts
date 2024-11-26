import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CustomerCount {

    @Field(() => Int, {nullable:false})
    services?: number;

    @Field(() => Int, {nullable:false})
    vehicles?: number;
}
