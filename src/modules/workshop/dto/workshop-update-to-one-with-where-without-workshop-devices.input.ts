import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutWorkshopDevicesInput } from './workshop-update-without-workshop-devices.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutWorkshopDevicesInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutWorkshopDevicesInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopDevicesInput)
    data!: WorkshopUpdateWithoutWorkshopDevicesInput;
}
