import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutWorkshopsInput } from './address-create-without-workshops.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutWorkshopsInput } from './address-create-or-connect-without-workshops.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutWorkshopsInput {

    @Field(() => AddressCreateOrConnectWithoutWorkshopsInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutWorkshopsInput)
    connectOrCreate?: AddressCreateOrConnectWithoutWorkshopsInput;

}
