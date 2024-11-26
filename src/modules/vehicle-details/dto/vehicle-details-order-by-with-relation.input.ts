import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from 'nestjs-graphql';
import { VehicleOrderByWithRelationInput } from '../../vehicle/dto/vehicle-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleDetailsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    vehicleDetailsId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    yearOfProduction?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    VIN?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    engineCapacity?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    countryOfRegistration?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    licensePlate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fuelType?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    engineNo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bodyColor?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    deletedAt?: SortOrderInput;

    @Field(() => VehicleOrderByWithRelationInput, {nullable:true})
    @Type(() => VehicleOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => VehicleOrderByWithRelationInput)
    vehicle?: VehicleOrderByWithRelationInput;
}
