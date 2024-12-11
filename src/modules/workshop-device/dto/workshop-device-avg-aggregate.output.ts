import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class WorkshopDeviceAvgAggregate {

    @Field(() => Float, {nullable:true})
    workshopDeviceId?: number;

    @Field(() => Float, {nullable:true})
    workshopId?: number;

    @Field(() => Float, {nullable:true})
    createdBy?: number;
}
