import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateWorkshopInput {

  @Field()
  personId: bigint;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  isVerified?: boolean;

  @Field({ nullable: true })
  isManagingWork?: boolean;
}