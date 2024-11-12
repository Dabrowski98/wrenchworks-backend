import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestUpdateManyWithoutVehicleNestedInput } from '../../service-request/dto/service-request-update-many-without-vehicle-nested.input';
import { Type } from 'class-transformer';
import { ServiceUpdateManyWithoutVehicleNestedInput } from '../../service/dto/service-update-many-without-vehicle-nested.input';
import { PersonUpdateOneRequiredWithoutVehiclesNestedInput } from '../../person/dto/person-update-one-required-without-vehicles-nested.input';
import { VehicleDetailsUpdateOneWithoutVehicleNestedInput } from '../../vehicle-details/dto/vehicle-details-update-one-without-vehicle-nested.input';

@InputType()
export class VehicleUpdateWithoutVehicleModelInput {

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

    @Field(() => PersonUpdateOneRequiredWithoutVehiclesNestedInput, {nullable:true})
    @Type(() => PersonUpdateOneRequiredWithoutVehiclesNestedInput)
    person?: PersonUpdateOneRequiredWithoutVehiclesNestedInput;

    @Field(() => VehicleDetailsUpdateOneWithoutVehicleNestedInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsUpdateOneWithoutVehicleNestedInput;
}
