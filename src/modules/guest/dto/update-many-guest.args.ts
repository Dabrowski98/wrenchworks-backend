import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GuestUpdateManyMutationInput } from './guest-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GuestWhereInput } from './guest-where.input';

@ArgsType()
export class UpdateManyGuestArgs {

    @Field(() => GuestUpdateManyMutationInput, {nullable:false})
    @Type(() => GuestUpdateManyMutationInput)
    @ValidateNested()
    data!: GuestUpdateManyMutationInput;

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    where?: GuestWhereInput;
}
