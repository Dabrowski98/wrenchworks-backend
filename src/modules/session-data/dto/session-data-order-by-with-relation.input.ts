import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { UserOrderByWithRelationInput } from '../../user/dto/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class SessionDataOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    sessionDataId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refreshToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    deviceName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deviceInfo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ipAddress?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deviceSerialNumber?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    issuedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    @ValidateNested()
    user?: UserOrderByWithRelationInput;
}
