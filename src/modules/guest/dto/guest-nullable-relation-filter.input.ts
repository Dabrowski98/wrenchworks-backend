import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestWhereInput } from './guest-where.input';

@InputType()
export class GuestNullableRelationFilter {

    @Field(() => GuestWhereInput, {nullable:true})
    is?: GuestWhereInput;

    @Field(() => GuestWhereInput, {nullable:true})
    isNot?: GuestWhereInput;
}
