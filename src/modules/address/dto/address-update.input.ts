import { Field, HideField, PartialType } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFieldUpdateOperationsInput } from 'src/modules/prisma/dto/generated/big-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from 'src/modules/prisma/dto/generated/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from 'src/modules/prisma/dto/generated/string-field-update-operations.input';
import { AddressCreateInput } from './address-create.input';

@InputType()
export class AddressUpdateInput extends PartialType(AddressCreateInput) {}
