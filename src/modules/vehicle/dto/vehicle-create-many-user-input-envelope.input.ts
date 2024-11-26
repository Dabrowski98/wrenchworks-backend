import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateManyUserInput } from './vehicle-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleCreateManyUserInputEnvelope {

    @Field(() => [VehicleCreateManyUserInput], {nullable:false})
    @Type(() => VehicleCreateManyUserInput)
    data!: Array<VehicleCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
