import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GuestCreateInput } from './guest-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneGuestArgs {

    @Field(() => GuestCreateInput, {nullable:false})
    @ValidateNested()
    @Type(() => GuestCreateInput)
    data!: GuestCreateInput;
}
