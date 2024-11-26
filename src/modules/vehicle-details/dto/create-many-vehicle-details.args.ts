import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleDetailsCreateManyInput } from './vehicle-details-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyVehicleDetailsArgs {

    @Field(() => [VehicleDetailsCreateManyInput], {nullable:false})
    @Type(() => VehicleDetailsCreateManyInput)
    @ValidateNested()
    data!: Array<VehicleDetailsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
