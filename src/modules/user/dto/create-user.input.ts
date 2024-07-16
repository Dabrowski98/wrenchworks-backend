import { InputType, Field } from '@nestjs/graphql';
import { UsersStatus } from '@prisma/client';

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  isVerified?: boolean;

  @Field(() => UsersStatus, { nullable: true })
  status?: UsersStatus;
}