import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeletePayload {
  @Field(() => Boolean)
  success: Boolean;
}
