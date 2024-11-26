import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GuestUpdateInput } from './guest-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';

@ArgsType()
export class UpdateOneGuestArgs {

    @Field(() => GuestUpdateInput, {nullable:false})
    @Type(() => GuestUpdateInput)
    @ValidateNested()
    data!: GuestUpdateInput;

    @Field(() => GuestWhereUniqueInput, {nullable:false})
    @Type(() => GuestWhereUniqueInput)
    where!: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;
}
