import { Args, ArgsType, Field } from "@nestjs/graphql";
import { EditReviewResponseInput } from "./edit-review-response.input";
import { ReviewResponseWhereUniqueInput } from "../dto/review-response-where-unique.input";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { Prisma } from "@prisma/client";

@ArgsType()
export class EditReviewResponseArgs {
  
  @ValidateNested()
  @Field(() => EditReviewResponseInput)
  @Type(() => EditReviewResponseInput)
  data!: EditReviewResponseInput;

  @Field(() => ReviewResponseWhereUniqueInput)
  @Type(() => ReviewResponseWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;
}
