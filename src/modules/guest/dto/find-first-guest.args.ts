import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GuestWhereInput } from './guest-where.input';
import { Type } from 'class-transformer';
import { GuestOrderByWithRelationInput } from './guest-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GuestScalarFieldEnum } from './guest-scalar-field.enum';

@ArgsType()
export class FindFirstGuestArgs {

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    where?: GuestWhereInput;

    @Field(() => [GuestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuestOrderByWithRelationInput>;

    @Field(() => GuestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GuestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GuestScalarFieldEnum>;
}
