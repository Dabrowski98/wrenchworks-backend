import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleCreateManyInput } from './vehicle-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVehicleArgs {

    @Field(() => [VehicleCreateManyInput], {nullable:false})
    @Type(() => VehicleCreateManyInput)
    data!: Array<VehicleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
