import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutWorkshopsInput } from './address-create-without-workshops.input';

@InputType()
export class AddressCreateOrConnectWithoutWorkshopsInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressCreateWithoutWorkshopsInput, {nullable:false})
    @Type(() => AddressCreateWithoutWorkshopsInput)
    create!: AddressCreateWithoutWorkshopsInput;
}
