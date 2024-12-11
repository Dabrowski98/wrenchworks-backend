import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceCreateInput } from './workshop-device-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneWorkshopDeviceArgs {

    @Field(() => WorkshopDeviceCreateInput, {nullable:false})
    @Type(() => WorkshopDeviceCreateInput)
    @ValidateNested()
    data!: WorkshopDeviceCreateInput;
}
