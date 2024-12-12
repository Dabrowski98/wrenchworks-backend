import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkshopDeviceOTPUncheckedCreateWithoutWorkshopInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopDeviceOTPId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Code must be a string' })
    @Validator.Length(7, 7, { message: 'Code must be exactly 7 characters' })
    @Validator.Matches(/^[0-9]{7}$/, { message: 'Invalid code format' })
    @Validator.IsNotEmpty()
    code!: string;

    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    @Validator.IsNotEmpty()
    expiresAt!: Date | string;

    }