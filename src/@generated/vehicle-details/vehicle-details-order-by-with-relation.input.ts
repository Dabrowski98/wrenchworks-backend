import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { VehicleOrderByWithRelationInput } from '../vehicle/vehicle-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleDetailsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    vehicleDetailsId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    vehicleId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    yearOfProduction?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    VIN?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    engineCapacity?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    licensePlate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fuelType?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    engineNo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bodyColor?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => VehicleOrderByWithRelationInput, {nullable:true})
    @Type(() => VehicleOrderByWithRelationInput)
    vehicle?: VehicleOrderByWithRelationInput;
}
