import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateManyCustomerInput } from './vehicle-create-many-customer.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleCreateManyCustomerInputEnvelope {

    @Field(() => [VehicleCreateManyCustomerInput], {nullable:false})
    @Type(() => VehicleCreateManyCustomerInput)
    data!: Array<VehicleCreateManyCustomerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
