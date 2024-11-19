import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutWorkshopsInput } from './address-create-without-workshops.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutWorkshopsInput } from './address-create-or-connect-without-workshops.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressCreateInput } from './address-create.input';
import * as Validator from 'class-validator';

@InputType()
export class AddressCreateNestedOneWithoutWorkshopsInput {
  @Field(() => AddressCreateInput, { nullable: true })
  @Type(() => AddressCreateInput)
  @Validator.ValidateNested()
  create?: AddressCreateInput;
}
