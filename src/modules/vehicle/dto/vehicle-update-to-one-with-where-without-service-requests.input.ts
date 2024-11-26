import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutServiceRequestsInput } from './vehicle-update-without-service-requests.input';

@InputType()
export class VehicleUpdateToOneWithWhereWithoutServiceRequestsInput {

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    where?: VehicleWhereInput;

    @Field(() => VehicleUpdateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutServiceRequestsInput)
    data!: VehicleUpdateWithoutServiceRequestsInput;
}
