import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceUpdateManyMutationInput } from './workshop-device-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceWhereInput } from './workshop-device-where.input';

@ArgsType()
export class UpdateManyWorkshopDeviceArgs {

    @Field(() => WorkshopDeviceUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkshopDeviceUpdateManyMutationInput)
    @ValidateNested()
    data!: WorkshopDeviceUpdateManyMutationInput;

    @Field(() => WorkshopDeviceWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceWhereInput)
    where?: WorkshopDeviceWhereInput;
}
