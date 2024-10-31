import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressPersonWhereInput } from './address-person-where.input';
import { Type } from 'class-transformer';
import { AddressPersonOrderByWithRelationInput } from './address-person-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AddressPersonScalarFieldEnum } from './address-person-scalar-field.enum';

@ArgsType()
export class FindFirstAddressPersonArgs {

    @Field(() => AddressPersonWhereInput, {nullable:true})
    @Type(() => AddressPersonWhereInput)
    where?: AddressPersonWhereInput;

    @Field(() => [AddressPersonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AddressPersonOrderByWithRelationInput>;

    @Field(() => AddressPersonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AddressPersonScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AddressPersonScalarFieldEnum>;
}
