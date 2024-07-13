import { User } from '../../user/entities/user.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class RefreshToken {
  @Field()
  id: number;

  @Field()
  token: string;

  @Field()
  expiresIn: Date;

  @Field(() => User)
  user: User;
}
