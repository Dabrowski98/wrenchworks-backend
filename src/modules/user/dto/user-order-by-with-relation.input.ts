import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { VehicleOrderByRelationAggregateInput } from '../../vehicle/dto/vehicle-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestOrderByRelationAggregateInput } from '../../service-request/dto/service-request-order-by-relation-aggregate.input';
import { CustomerOrderByRelationAggregateInput } from '../../customer/dto/customer-order-by-relation-aggregate.input';
import { EmployeeOrderByRelationAggregateInput } from '../../employee/dto/employee-order-by-relation-aggregate.input';
import { WorkshopOrderByRelationAggregateInput } from '../../workshop/dto/workshop-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../../review/dto/review-order-by-relation-aggregate.input';
import { ReviewResponseOrderByRelationAggregateInput } from '../../review-response/dto/review-response-order-by-relation-aggregate.input';
import { UserReportOrderByRelationAggregateInput } from '../../user-report/dto/user-report-order-by-relation-aggregate.input';
import { JoinWorkshopRequestOrderByRelationAggregateInput } from '../../join-workshop-request/dto/join-workshop-request-order-by-relation-aggregate.input';
import { SessionDataOrderByRelationAggregateInput } from '../../session-data/dto/session-data-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    telephoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    avatarURL?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    isVerified?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    firstName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    lastName?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: SortOrderInput;

    @HideField()
    deletedAt?: SortOrderInput;

    @Field(() => VehicleOrderByRelationAggregateInput, {nullable:true})
    @Type(() => VehicleOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => VehicleOrderByRelationAggregateInput)
    vehicles?: VehicleOrderByRelationAggregateInput;

    @Field(() => ServiceRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ServiceRequestOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => ServiceRequestOrderByRelationAggregateInput)
    serviceRequests?: ServiceRequestOrderByRelationAggregateInput;

    @Field(() => CustomerOrderByRelationAggregateInput, {nullable:true})
    @Type(() => CustomerOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => CustomerOrderByRelationAggregateInput)
    customers?: CustomerOrderByRelationAggregateInput;

    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    @Type(() => EmployeeOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => EmployeeOrderByRelationAggregateInput)
    employees?: EmployeeOrderByRelationAggregateInput;

    @Field(() => WorkshopOrderByRelationAggregateInput, {nullable:true})
    @Type(() => WorkshopOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => WorkshopOrderByRelationAggregateInput)
    workshops?: WorkshopOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ReviewOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => ReviewOrderByRelationAggregateInput)
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => ReviewResponseOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ReviewResponseOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => ReviewResponseOrderByRelationAggregateInput)
    reviewResponses?: ReviewResponseOrderByRelationAggregateInput;

    @Field(() => UserReportOrderByRelationAggregateInput, {nullable:true})
    @ValidateNested()
    @Type(() => UserReportOrderByRelationAggregateInput)
    userReports?: UserReportOrderByRelationAggregateInput;

    @Field(() => JoinWorkshopRequestOrderByRelationAggregateInput, {nullable:true})
    @ValidateNested()
    joinWorkshopRequests?: JoinWorkshopRequestOrderByRelationAggregateInput;

    @Field(() => SessionDataOrderByRelationAggregateInput, {nullable:true})
    @ValidateNested()
    sessionData?: SessionDataOrderByRelationAggregateInput;
}
