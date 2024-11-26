import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleModelCreateManyInput } from './vehicle-model-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyVehicleModelArgs {

    @Field(() => [VehicleModelCreateManyInput], {nullable:false})
    @Type(() => VehicleModelCreateManyInput)
    @ValidateNested()
    data!: Array<VehicleModelCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
