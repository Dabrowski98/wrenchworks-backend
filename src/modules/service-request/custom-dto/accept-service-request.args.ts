import { ArgsType, Field } from "@nestjs/graphql";
import { CreateServiceRequestAsGuestInput } from "./create-service-request-as-guest.input";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { AcceptServiceRequestInput } from "./accept-service-request.input";

@ArgsType()
export class AcceptServiceRequestArgs {
  @Field(() => AcceptServiceRequestInput)
  @ValidateNested()
  @Type(() => AcceptServiceRequestInput)
  data!: AcceptServiceRequestInput;
}