import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutWorkshopsInput } from './address-create-without-workshops.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutWorkshopsInput } from './address-create-or-connect-without-workshops.input';
import { AddressUpsertWithoutWorkshopsInput } from './address-upsert-without-workshops.input';
import { AddressWhereInput } from './address-where.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutWorkshopsInput } from './address-update-to-one-with-where-without-workshops.input';
import { AddressUpdateWithoutWorkshopsInput } from './address-update-without-workshops.input';
import { AddressCreateInput } from './address-create.input';
import * as Validator from 'class-validator';
@InputType()
export class AddressUpdateOneWithoutWorkshopsNestedInput {

    @Field(() => AddressCreateInput, {nullable:true})
    @Type(() => AddressCreateInput)
    @Validator.IsOptional()
    @Validator.ValidateNested()
    create?: AddressCreateInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    @Validator.IsOptional()
    @Validator.Allow()
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'addressId'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutWorkshopsInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutWorkshopsInput)
    @Validator.IsOptional()
    @Validator.ValidateNested()
    update?: AddressUpdateToOneWithWhereWithoutWorkshopsInput;
}
