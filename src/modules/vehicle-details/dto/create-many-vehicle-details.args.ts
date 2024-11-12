import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleDetailsCreateManyInput } from './vehicle-details-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVehicleDetailsArgs {

    @Field(() => [VehicleDetailsCreateManyInput], {nullable:false})
    @Type(() => VehicleDetailsCreateManyInput)
    data!: Array<VehicleDetailsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
