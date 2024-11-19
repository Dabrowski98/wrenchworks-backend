import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutPersonsInput } from './address-create-without-persons.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutPersonsInput } from './address-create-or-connect-without-persons.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import * as Validator from 'class-validator';
import { AddressCreateInput } from './address-create.input';

@InputType()
export class AddressCreateNestedOneWithoutPersonsInput {
  @Field(() => AddressCreateInput, { nullable: true })
  @Type(() => AddressCreateInput)
  @Validator.ValidateNested()
  create?: AddressCreateInput;
}
