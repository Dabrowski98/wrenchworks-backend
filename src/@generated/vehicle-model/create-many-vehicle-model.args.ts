import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleModelCreateManyInput } from './vehicle-model-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVehicleModelArgs {

    @Field(() => [VehicleModelCreateManyInput], {nullable:false})
    @Type(() => VehicleModelCreateManyInput)
    data!: Array<VehicleModelCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
