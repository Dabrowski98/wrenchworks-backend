import { Field, ObjectType } from "@nestjs/graphql";
import { Employee } from "src/modules/employee/dto";
import { Workshop } from "src/modules/workshop/dto";

@ObjectType()
export class RegisterWorkshopResponse {
    @Field(() => Workshop)
    workshop!: Workshop;

    @Field(() => Employee)
    ownerEmployee!: Employee;
}