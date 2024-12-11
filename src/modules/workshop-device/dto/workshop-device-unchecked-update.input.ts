import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class WorkshopDeviceUncheckedUpdateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopDeviceId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Serial number must be a string' })
    @Validator.Length(1, 255, { message: 'Serial number must be between 1 and 255 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Serial number is required' })
    serialNumber?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'PC name must be a string' })
    @Validator.Length(1, 255, { message: 'PC name must be between 1 and 255 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'PC name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    deviceName?: string;

    }