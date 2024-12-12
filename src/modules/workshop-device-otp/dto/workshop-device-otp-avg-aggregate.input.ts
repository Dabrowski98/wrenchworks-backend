import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkshopDeviceOTPAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    workshopDeviceOTPId?: true;

    @Field(() => Boolean, {nullable:true})
    employeeId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;
}
