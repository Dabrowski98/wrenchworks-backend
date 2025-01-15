import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class WorkshopDeviceOtpAvgAggregate {

    @Field(() => Float, {nullable:true})
    WorkshopDeviceOtpId?: number;

    @Field(() => Float, {nullable:true})
    employeeId?: number;

    @Field(() => Float, {nullable:true})
    workshopId?: number;
}
