import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, MaxLength } from 'class-validator';
@InputType()
export class RenameSessionDataInput {
  @MaxLength(255)
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  deviceName?: string;

  @MaxLength(255)
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  deviceInfo?: string;
}
