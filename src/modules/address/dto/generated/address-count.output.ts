import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AddressCount {

    @Field(() => Int, {nullable:false})
    persons?: number;
}
