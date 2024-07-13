import { InputType, Field } from '@nestjs/graphql';
import { UsersStatus } from '@prisma/client';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  isVerified?: boolean;

  @Field(() => UsersStatus, { nullable: true })
  status?: UsersStatus;
}
