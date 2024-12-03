import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/modules/user/dto/user.model'; 

@ObjectType()
export class SignInUserResponse {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field(() => User)
  user: User;
}
