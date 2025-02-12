import { Args, ArgsType, Field } from "@nestjs/graphql";
import { EditReviewResponseInput } from "./edit-review-response.input";
import { ReviewResponseWhereUniqueInput } from "../dto/review-response-where-unique.input";

@ArgsType()
export class EditReviewResponseArgs {
  @Field(() => EditReviewResponseInput)
  data: EditReviewResponseInput;

  @Field(() => ReviewResponseWhereUniqueInput)
  where: ReviewResponseWhereUniqueInput;
}
