import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleScalarWhereInput } from './vehicle-scalar-where.input';
import { Type } from 'class-transformer';
import { VehicleUpdateManyMutationInput } from './vehicle-update-many-mutation.input';

@InputType()
export class VehicleUpdateManyWithWhereWithoutPersonInput {

    @Field(() => VehicleScalarWhereInput, {nullable:false})
    @Type(() => VehicleScalarWhereInput)
    where!: VehicleScalarWhereInput;

    @Field(() => VehicleUpdateManyMutationInput, {nullable:false})
    @Type(() => VehicleUpdateManyMutationInput)
    data!: VehicleUpdateManyMutationInput;
}
