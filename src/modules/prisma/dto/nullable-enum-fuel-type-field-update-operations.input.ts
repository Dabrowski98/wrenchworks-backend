import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FuelType } from './fuel-type.enum';

@InputType()
export class NullableEnumFuelTypeFieldUpdateOperationsInput {

    @Field(() => FuelType, {nullable:true})
    set?: keyof typeof FuelType;
}
