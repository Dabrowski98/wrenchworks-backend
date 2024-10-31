import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AddressWorkshopAvgAggregate {

    @Field(() => Float, {nullable:true})
    addressId?: number;

    @Field(() => Float, {nullable:true})
    workshopId?: number;
}
