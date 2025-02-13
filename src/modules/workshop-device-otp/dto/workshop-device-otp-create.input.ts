import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { WorkshopCreateNestedOneWithoutWorkshopDeviceOtpInput } from '../../workshop/dto/workshop-create-nested-one-without-workshop-device-otp.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopDeviceOtpCreateInput {

    @HideField()
    WorkshopDeviceOtpId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    employeeId?: bigint | number;

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

    @HideField()
    createdAt?: Date | string;

    @Field(() => WorkshopCreateNestedOneWithoutWorkshopDeviceOtpInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutWorkshopDeviceOtpInput)
    @ValidateNested()
    @Type(() => WorkshopCreateNestedOneWithoutWorkshopDeviceOtpInput)
    workshop!: WorkshopCreateNestedOneWithoutWorkshopDeviceOtpInput;
}
