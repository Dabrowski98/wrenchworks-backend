import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkshopInput {
  @Field()
  personId: bigint;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true, defaultValue: true })
  isManagingWork?: boolean;
}
