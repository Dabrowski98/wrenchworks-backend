import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleDetailsWhereInput } from './vehicle-details-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyVehicleDetailsArgs {

    @Field(() => VehicleDetailsWhereInput, {nullable:true})
    @Type(() => VehicleDetailsWhereInput)
    where?: VehicleDetailsWhereInput;
}
