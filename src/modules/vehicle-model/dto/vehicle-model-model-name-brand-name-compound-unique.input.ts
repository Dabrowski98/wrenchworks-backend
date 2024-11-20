import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';


@InputType()
export class VehicleModelModelNameBrandNameCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Model name must be a string' })
    @Validator.IsNotEmpty({ message: 'Model name is required' })
    @Validator.Length(2, 50, { message: 'Model name must be between 2 and 50 characters' })
    modelName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Brand name must be a string' })
    @Validator.IsNotEmpty({ message: 'Brand name is required' })
    @Validator.Length(2, 50, { message: 'Brand name must be between 2 and 50 characters' })
    brandName!: string;
}
