import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from 'nestjs-graphql';

@InputType()
export class WorkshopMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    ownerId?: true;

    @Field(() => Boolean, {nullable:true})
    addressId?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    telephoneNumber?: true;

    @Field(() => Boolean, {nullable:true})
    isVerified?: true;

    @Field(() => Boolean, {nullable:true})
    isManagingWork?: true;

    @Field(() => Boolean, {nullable:true})
    isOfferingService?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    updatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    deletedAt?: true;
}
