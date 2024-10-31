import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateManyVehicleInput } from './service-create-many-vehicle.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceCreateManyVehicleInputEnvelope {

    @Field(() => [ServiceCreateManyVehicleInput], {nullable:false})
    @Type(() => ServiceCreateManyVehicleInput)
    data!: Array<ServiceCreateManyVehicleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
