import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutWorkshopAddressesInput } from './workshop-update-without-workshop-addresses.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutWorkshopAddressesInput } from './workshop-create-without-workshop-addresses.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutWorkshopAddressesInput {

    @Field(() => WorkshopUpdateWithoutWorkshopAddressesInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopAddressesInput)
    update!: WorkshopUpdateWithoutWorkshopAddressesInput;

    @Field(() => WorkshopCreateWithoutWorkshopAddressesInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopAddressesInput)
    create!: WorkshopCreateWithoutWorkshopAddressesInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
