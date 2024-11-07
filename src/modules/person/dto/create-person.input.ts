import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class CreatePersonInput {
  @Field(() => String)
  @IsString()
  firstName: string;

  @Field(() => String)
  @IsString()
  lastName: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  telephoneNumber?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  addressId?: bigint;
} 