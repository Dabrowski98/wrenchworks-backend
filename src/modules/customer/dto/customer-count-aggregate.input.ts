import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CustomerCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    customerId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    guestId?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    creationSource?: true;

    @Field(() => Boolean, {nullable:true})
    telephoneNumber?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    isVerified?: true;

    @Field(() => Boolean, {nullable:true})
    totalDue?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    NIP?: true;

    @Field(() => Boolean, {nullable:true})
    companyName?: true;

    @HideField()
    deletedAt?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    createdBy?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    updatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
