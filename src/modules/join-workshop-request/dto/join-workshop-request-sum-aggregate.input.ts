import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class JoinWorkshopRequestSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    joinWorkshopRequestId?: true;

    @Field(() => Boolean, {nullable:true})
    receiverId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    employeeId?: true;

    @HideField()
    createdBy?: true;

    @HideField()
    updatedBy?: true;
}
