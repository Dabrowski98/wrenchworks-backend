import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LinkUserToPersonInput {
  @Field()
  userId: bigint;

  @Field()
  personId: bigint;
}
