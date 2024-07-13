import { ObjectType, Field, ID, ResolveField, Parent } from '@nestjs/graphql';
import { BigIntScalar } from 'src/common/scalars/bigint.scalar';
import { Person } from 'src/modules/persons/entities/person.entity';
import { DatabaseService } from 'src/database/database.service';
// import { Review } from 'src/reviews/entities/review.entity';
// import { ReviewResponse } from 'src/review-responses/entities/review-response.entity';
// import { UserReport } from 'src/user-reports/entities/user-report.entity';
// import { Person } from 'src/person/entities/person.entity';

@ObjectType()
export class User {
  @Field()
  userId: bigint;

  @Field({ nullable: true })
  personId?: bigint;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  isVerified?: boolean;

  @Field({ nullable: true })
  status?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Person, { nullable: true })
  person?: Person;
  
  //   @Field(() => [Review], { nullable: true })
  //   reviews?: Review[];

  //   @Field(() => [ReviewResponse], { nullable: true })
  //   reviewResponses?: ReviewResponse[];

  //   @Field(() => [UserReport], { nullable: true })
  //   userReports?: UserReport[];
}
