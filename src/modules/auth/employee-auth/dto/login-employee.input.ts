import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length, Matches, IsOptional, IsNotEmpty, MinLength } from 'class-validator';
import * as Scalars from 'graphql-scalars';

@InputType()
export class LoginEmployeeInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  login!: string;

  @Field(() => String)
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password!: string;

  @Field(() => Scalars.GraphQLBigInt)
  @IsNotEmpty()
  workshopId!: bigint;
}