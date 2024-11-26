import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GuestWhereInput } from './guest-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGuestArgs {

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    where?: GuestWhereInput;
}
