import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VehicleModelCreateManyVehiclesBrandInput {

    @HideField()
    modelId?: bigint | number;

    @Field(() => String, {nullable:false})
    modelName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
