import { Field } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { InputType } from '@nestjs/graphql';
@InputType()
export class EditReviewResponseInput {
  @Field(() => String)
  @Validator.IsString({ message: 'Response text must be a string' })
  @Validator.Length(0, 5000, {
    message: 'Response text cannot exceed 5000 characters',
  })
  @Validator.IsNotEmpty({})
  responseText: string;
}
