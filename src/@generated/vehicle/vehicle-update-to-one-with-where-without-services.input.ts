import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutServicesInput } from './vehicle-update-without-services.input';

@InputType()
export class VehicleUpdateToOneWithWhereWithoutServicesInput {

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;

    @Field(() => VehicleUpdateWithoutServicesInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutServicesInput)
    data!: VehicleUpdateWithoutServicesInput;
}
