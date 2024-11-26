import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleUpdateWithoutServicesInput } from './vehicle-update-without-services.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateWithoutServicesInput } from './vehicle-create-without-services.input';
import { VehicleWhereInput } from './vehicle-where.input';

@InputType()
export class VehicleUpsertWithoutServicesInput {

    @Field(() => VehicleUpdateWithoutServicesInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutServicesInput)
    @ValidateNested()
    update!: VehicleUpdateWithoutServicesInput;

    @Field(() => VehicleCreateWithoutServicesInput, {nullable:false})
    @Type(() => VehicleCreateWithoutServicesInput)
    @ValidateNested()
    create!: VehicleCreateWithoutServicesInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;
}
