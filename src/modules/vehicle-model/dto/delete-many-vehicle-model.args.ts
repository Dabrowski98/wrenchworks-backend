import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleModelWhereInput } from './vehicle-model-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyVehicleModelArgs {

    @Field(() => VehicleModelWhereInput, {nullable:true})
    @Type(() => VehicleModelWhereInput)
    where?: VehicleModelWhereInput;
}
