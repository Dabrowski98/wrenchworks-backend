import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VehicleModelModelNameBrandNameCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    modelName!: string;

    @Field(() => String, {nullable:false})
    brandName!: string;
}
