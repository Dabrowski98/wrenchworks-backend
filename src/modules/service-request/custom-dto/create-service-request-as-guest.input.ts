import { Field, InputType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { GuestCreateInput } from "src/modules/guest/dto";
import { ServiceRequestCreateInput } from "../dto";
import { VehicleCreateInput } from "src/modules/vehicle/dto";

@InputType()
export class CreateServiceRequestAsGuestInput {
    @Field(() => GuestCreateInput)
    @ValidateNested()
    @Type(() => GuestCreateInput)
    guest: GuestCreateInput

    @Field(() => ServiceRequestCreateInput)
    @ValidateNested()
    @Type(() => ServiceRequestCreateInput)
    serviceRequest: ServiceRequestCreateInput

    @Field(() => VehicleCreateInput)
    @ValidateNested()
    @Type(() => VehicleCreateInput)
    vehicle: VehicleCreateInput
}