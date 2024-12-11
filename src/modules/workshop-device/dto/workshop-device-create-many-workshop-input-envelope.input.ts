import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceCreateManyWorkshopInput } from './workshop-device-create-many-workshop.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopDeviceCreateManyWorkshopInputEnvelope {

    @Field(() => [WorkshopDeviceCreateManyWorkshopInput], {nullable:false})
    @Type(() => WorkshopDeviceCreateManyWorkshopInput)
    data!: Array<WorkshopDeviceCreateManyWorkshopInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
