import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkshopDeviceOtpSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    WorkshopDeviceOtpId?: true;

    @Field(() => Boolean, {nullable:true})
    employeeId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;
}
