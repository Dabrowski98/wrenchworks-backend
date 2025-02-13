import { ArgsType, Field } from "@nestjs/graphql";
import { CreateServiceRequestAsGuestInput } from "./create-service-request-as-guest.input";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";

@ArgsType()
export class CreateServiceRequestAsGuestArgs {
  @Field(() => CreateServiceRequestAsGuestInput)
  @ValidateNested()
  @Type(() => CreateServiceRequestAsGuestInput)
  data!: CreateServiceRequestAsGuestInput;
}