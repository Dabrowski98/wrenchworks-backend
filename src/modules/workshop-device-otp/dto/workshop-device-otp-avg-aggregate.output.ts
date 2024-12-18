import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class WorkshopDeviceOTPAvgAggregate {

    @Field(() => Float, {nullable:true})
    workshopDeviceOTPId?: number;

    @Field(() => Float, {nullable:true})
    employeeId?: number;

    @Field(() => Float, {nullable:true})
    workshopId?: number;
}
