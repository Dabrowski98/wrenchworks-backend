import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceScalarWhereInput } from './workshop-device-scalar-where.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceUpdateManyMutationInput } from './workshop-device-update-many-mutation.input';

@InputType()
export class WorkshopDeviceUpdateManyWithWhereWithoutWorkshopInput {

    @Field(() => WorkshopDeviceScalarWhereInput, {nullable:false})
    @Type(() => WorkshopDeviceScalarWhereInput)
    where!: WorkshopDeviceScalarWhereInput;

    @Field(() => WorkshopDeviceUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkshopDeviceUpdateManyMutationInput)
    data!: WorkshopDeviceUpdateManyMutationInput;
}
