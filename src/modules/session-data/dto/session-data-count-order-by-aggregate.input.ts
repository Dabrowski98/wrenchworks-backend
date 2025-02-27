import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';

@InputType()
export class SessionDataCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    sessionDataId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refreshToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceInfo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ipAddress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceSerialNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    issuedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: keyof typeof SortOrder;
}
