import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { VehicleOrderByWithRelationInput } from '../../vehicle/dto/vehicle-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestOrderByWithRelationInput } from '../../service-request/dto/service-request-order-by-with-relation.input';
import { CustomerOrderByWithRelationInput } from '../../customer/dto/customer-order-by-with-relation.input';

@InputType()
export class GuestOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    guestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    telephoneNumber?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    NIP?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    companyName?: SortOrderInput;

    @Field(() => VehicleOrderByWithRelationInput, {nullable:true})
    @Type(() => VehicleOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => VehicleOrderByWithRelationInput)
    vehicle?: VehicleOrderByWithRelationInput;

    @Field(() => ServiceRequestOrderByWithRelationInput, {nullable:true})
    @Type(() => ServiceRequestOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => ServiceRequestOrderByWithRelationInput)
    serviceRequest?: ServiceRequestOrderByWithRelationInput;

    @Field(() => CustomerOrderByWithRelationInput, {nullable:true})
    @Type(() => CustomerOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => CustomerOrderByWithRelationInput)
    customer?: CustomerOrderByWithRelationInput;
}
