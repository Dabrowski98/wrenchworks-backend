import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleUpdateWithoutServiceRequestsInput } from './vehicle-update-without-service-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateWithoutServiceRequestsInput } from './vehicle-create-without-service-requests.input';
import { VehicleWhereInput } from './vehicle-where.input';

@InputType()
export class VehicleUpsertWithoutServiceRequestsInput {

    @Field(() => VehicleUpdateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutServiceRequestsInput)
    @ValidateNested()
    update!: VehicleUpdateWithoutServiceRequestsInput;

    @Field(() => VehicleCreateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => VehicleCreateWithoutServiceRequestsInput)
    @ValidateNested()
    create!: VehicleCreateWithoutServiceRequestsInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;
}
