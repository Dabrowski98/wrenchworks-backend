import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceCreateManyInput } from './workshop-device-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyWorkshopDeviceArgs {

    @Field(() => [WorkshopDeviceCreateManyInput], {nullable:false})
    @Type(() => WorkshopDeviceCreateManyInput)
    @ValidateNested()
    data!: Array<WorkshopDeviceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
