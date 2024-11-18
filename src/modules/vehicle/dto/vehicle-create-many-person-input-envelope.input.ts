import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateManyPersonInput } from './vehicle-create-many-person.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@InputType()
export class VehicleCreateManyPersonInputEnvelope {

    @Field(() => [VehicleCreateManyPersonInput], {nullable:false})
    @Type(() => VehicleCreateManyPersonInput)
    @Validator.ValidateNested()
    data!: VehicleCreateManyPersonInput[];

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
