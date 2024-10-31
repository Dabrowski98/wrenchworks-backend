import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleBrandWhereInput } from './vehicle-brand-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyVehicleBrandArgs {

    @Field(() => VehicleBrandWhereInput, {nullable:true})
    @Type(() => VehicleBrandWhereInput)
    where?: VehicleBrandWhereInput;
}
