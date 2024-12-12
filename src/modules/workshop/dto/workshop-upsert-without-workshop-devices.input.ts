import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutWorkshopDevicesInput } from './workshop-update-without-workshop-devices.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateWithoutWorkshopDevicesInput } from './workshop-create-without-workshop-devices.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutWorkshopDevicesInput {

    @Field(() => WorkshopUpdateWithoutWorkshopDevicesInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopDevicesInput)
    @ValidateNested()
    update!: WorkshopUpdateWithoutWorkshopDevicesInput;

    @Field(() => WorkshopCreateWithoutWorkshopDevicesInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopDevicesInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutWorkshopDevicesInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
