import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneGuestArgs {

    @Field(() => GuestWhereUniqueInput, {nullable:false})
    @Type(() => GuestWhereUniqueInput)
    where!: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;
}
