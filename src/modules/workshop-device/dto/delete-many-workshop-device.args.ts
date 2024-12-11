import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceWhereInput } from './workshop-device-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkshopDeviceArgs {

    @Field(() => WorkshopDeviceWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceWhereInput)
    where?: WorkshopDeviceWhereInput;
}
