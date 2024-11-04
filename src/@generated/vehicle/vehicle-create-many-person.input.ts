import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VehicleCreateManyPersonInput {

    @HideField()
    vehicleId?: bigint | number;

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => String, {nullable:false})
    modelId!: bigint | number;

    @HideField()
    deletedAt?: Date | string;
}
