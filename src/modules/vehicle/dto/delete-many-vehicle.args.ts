import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyVehicleArgs {

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;
}
