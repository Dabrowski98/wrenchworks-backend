import { Field } from '@nestjs/graphql';

import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { Type } from 'class-transformer';
import { Transform } from 'class-transformer';
import * as Validator from 'class-validator';
import { GraphQLBigInt } from 'graphql-scalars';
import {
  GraphQLDecimal,
  transformToDecimal,
} from 'prisma-graphql-type-decimal';
import { ServiceStatus } from 'src/modules/prisma';

@InputType()
export class CloseOneServiceInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString({ message: 'Description must be a string' })
  @Validator.Length(0, 5000, {
    message: 'Description cannot exceed 5000 characters',
  })
  @Validator.IsOptional()
  serviceDescription?: string;

  @Field(() => ServiceStatus, { nullable: true })
  @Validator.IsEnum(ServiceStatus, { message: 'Invalid service status' })
  @Validator.IsOptional()
  status?: keyof typeof ServiceStatus;

  @Field(() => Boolean, { nullable: true })
  @Validator.IsBoolean({ message: 'Payed off must be a boolean' })
  @Validator.IsOptional()
  payedOff?: boolean;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Validator.IsNumber({}, { message: 'Payment amount must be a number' })
  @Validator.Min(0, { message: 'Payment amount cannot be negative' })
  @Validator.Max(9999999.99, {
    message: 'Payment amount cannot exceed 9999999.99',
  })
  @Validator.IsOptional()
  paymentAmount?: Decimal;

  @Field(() => Date, { nullable: true })
  @Validator.IsDate({ message: 'Service end date must be a valid date' })
  @Validator.IsOptional()
  serviceEndDate?: Date | string;
}
