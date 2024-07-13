import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePersonInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  telephoneNumber?: string;
}
