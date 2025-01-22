import { Field, InputType } from "@nestjs/graphql";
import { GraphQLBigInt } from "graphql-scalars";
import { CustomerCreateInput, CustomerCreateWithoutVehiclesInput } from "src/modules/customer/dto";
import { TaskCreateInput } from "src/modules/task/dto";

@InputType()
export class AcceptServiceRequestInput {
    @Field(() => GraphQLBigInt, {nullable:false})
    serviceRequestId!: bigint;

    @Field(() => GraphQLBigInt, {nullable:false})
    employeeId!: bigint;

    @Field(() => Date, {nullable:true})
    serviceStartDate?: Date | string;

    @Field(() => String, {nullable:true})
    serviceDescription?: string;

    @Field(() => CustomerCreateWithoutVehiclesInput, {nullable:true})
    customer?: CustomerCreateWithoutVehiclesInput;

    @Field(() => [TaskCreateInput], {nullable:true})
    tasks?: TaskCreateInput[];
}