import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class VehicleModelUncheckedUpdateManyInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    modelId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Model name must be a string' })
    @Validator.Length(2, 50, { message: 'Model name must be between 2 and 50 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Model name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    modelName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Brand name must be a string' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Set name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    @Validator.Length(2, 50, { message: 'Brand name must be between 2 and 50 characters' })
    brand?: string;

    }