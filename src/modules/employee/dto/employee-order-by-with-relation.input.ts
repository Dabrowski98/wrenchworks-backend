import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { PermissionSetOrderByWithRelationInput } from '../../permission-set/dto/permission-set-order-by-with-relation.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ServiceOrderByRelationAggregateInput } from '../../service/dto/service-order-by-relation-aggregate.input';
import { JoinWorkshopRequestOrderByRelationAggregateInput } from '../../join-workshop-request/dto/join-workshop-request-order-by-relation-aggregate.input';
import { TaskOrderByRelationAggregateInput } from '../../task/dto/task-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../../user/dto/user-order-by-with-relation.input';
import { WorkshopOrderByWithRelationInput } from '../../workshop/dto/workshop-order-by-with-relation.input';

@InputType()
export class EmployeeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    nickname?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    login?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    permissionSetId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    joinedAt?: keyof typeof SortOrder;

    @Field(() => PermissionSetOrderByWithRelationInput, {nullable:true})
    @ValidateNested()
    @Type(() => PermissionSetOrderByWithRelationInput)
    permissionSet?: PermissionSetOrderByWithRelationInput;

    @Field(() => ServiceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ServiceOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => ServiceOrderByRelationAggregateInput)
    services?: ServiceOrderByRelationAggregateInput;

    @Field(() => JoinWorkshopRequestOrderByRelationAggregateInput, {nullable:true})
    joinWorkshopRequests?: JoinWorkshopRequestOrderByRelationAggregateInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    @Type(() => TaskOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => TaskOrderByRelationAggregateInput)
    tasks?: TaskOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;
}