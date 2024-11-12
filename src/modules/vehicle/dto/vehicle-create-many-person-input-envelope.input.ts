import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateManyPersonInput } from './vehicle-create-many-person.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleCreateManyPersonInputEnvelope {

    @Field(() => [VehicleCreateManyPersonInput], {nullable:false})
    @Type(() => VehicleCreateManyPersonInput)
    data!: Array<VehicleCreateManyPersonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
