import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateManyVehicleInput } from './service-request-create-many-vehicle.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestCreateManyVehicleInputEnvelope {

    @Field(() => [ServiceRequestCreateManyVehicleInput], {nullable:false})
    @Type(() => ServiceRequestCreateManyVehicleInput)
    data!: Array<ServiceRequestCreateManyVehicleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
