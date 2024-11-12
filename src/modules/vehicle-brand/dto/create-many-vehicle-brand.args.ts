import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleBrandCreateManyInput } from './vehicle-brand-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVehicleBrandArgs {

    @Field(() => [VehicleBrandCreateManyInput], {nullable:false})
    @Type(() => VehicleBrandCreateManyInput)
    data!: Array<VehicleBrandCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
