import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceWhereInput } from './workshop-device-where.input';

@InputType()
export class WorkshopDeviceListRelationFilter {

    @Field(() => WorkshopDeviceWhereInput, {nullable:true})
    every?: WorkshopDeviceWhereInput;

    @Field(() => WorkshopDeviceWhereInput, {nullable:true})
    some?: WorkshopDeviceWhereInput;

    @Field(() => WorkshopDeviceWhereInput, {nullable:true})
    none?: WorkshopDeviceWhereInput;
}
