import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressOrderByWithRelationInput } from './address-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AddressScalarFieldEnum } from './address-scalar-field.enum';

@ArgsType()
export class FindFirstAddressOrThrowArgs {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => [AddressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AddressOrderByWithRelationInput>;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AddressScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
