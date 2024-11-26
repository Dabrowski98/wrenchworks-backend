import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../../user/dto/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { WorkshopOrderByWithRelationInput } from '../../workshop/dto/workshop-order-by-with-relation.input';
import { ValidateNested } from 'class-validator';
import { EmployeeOrderByWithRelationInput } from '../../employee/dto/employee-order-by-with-relation.input';

@InputType()
export class JoinWorkshopRequestOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    joinWorkshopRequestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    receiverId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    message?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @HideField()
    createdAt?: SortOrderInput;

    @HideField()
    createdBy?: SortOrderInput;

    @HideField()
    updatedAt?: SortOrderInput;

    @HideField()
    updatedBy?: SortOrderInput;

    @HideField()
    resolvedAt?: SortOrderInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;

    @Field(() => EmployeeOrderByWithRelationInput, {nullable:true})
    @Type(() => EmployeeOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => EmployeeOrderByWithRelationInput)
    employee?: EmployeeOrderByWithRelationInput;
}
