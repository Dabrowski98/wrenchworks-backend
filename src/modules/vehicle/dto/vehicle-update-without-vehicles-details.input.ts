import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestUpdateManyWithoutVehicleNestedInput } from '../../service-request/dto/service-request-update-many-without-vehicle-nested.input';
import { Type } from 'class-transformer';
import { ServiceUpdateManyWithoutVehicleNestedInput } from '../../service/dto/service-update-many-without-vehicle-nested.input';
import { VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput } from '../../vehicle-model/dto/vehicle-model-update-one-required-without-vehicles-nested.input';
import { PersonUpdateOneRequiredWithoutVehiclesNestedInput } from '../../person/dto/person-update-one-required-without-vehicles-nested.input';

@InputType()
export class VehicleUpdateWithoutVehiclesDetailsInput {

    @HideField()
    vehicleId?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceRequestUpdateManyWithoutVehicleNestedInput, {nullable:true})
    @Type(() => ServiceRequestUpdateManyWithoutVehicleNestedInput)
    vehicleAssociatedServiceRequests?: ServiceRequestUpdateManyWithoutVehicleNestedInput;

    @Field(() => ServiceUpdateManyWithoutVehicleNestedInput, {nullable:true})
    @Type(() => ServiceUpdateManyWithoutVehicleNestedInput)
    services?: ServiceUpdateManyWithoutVehicleNestedInput;

    @Field(() => VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput, {nullable:true})
    vehicleModel?: VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput;

    @Field(() => PersonUpdateOneRequiredWithoutVehiclesNestedInput, {nullable:true})
    @Type(() => PersonUpdateOneRequiredWithoutVehiclesNestedInput)
    person?: PersonUpdateOneRequiredWithoutVehiclesNestedInput;
}
