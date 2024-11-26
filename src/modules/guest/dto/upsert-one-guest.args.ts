import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { Type } from 'class-transformer';
import { GuestCreateInput } from './guest-create.input';
import { GuestUpdateInput } from './guest-update.input';

@ArgsType()
export class UpsertOneGuestArgs {

    @Field(() => GuestWhereUniqueInput, {nullable:false})
    @Type(() => GuestWhereUniqueInput)
    where!: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;

    @Field(() => GuestCreateInput, {nullable:false})
    @Type(() => GuestCreateInput)
    create!: GuestCreateInput;

    @Field(() => GuestUpdateInput, {nullable:false})
    @Type(() => GuestUpdateInput)
    update!: GuestUpdateInput;
}
