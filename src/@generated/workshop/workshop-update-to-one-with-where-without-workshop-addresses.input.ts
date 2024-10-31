import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutWorkshopAddressesInput } from './workshop-update-without-workshop-addresses.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutWorkshopAddressesInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutWorkshopAddressesInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopAddressesInput)
    data!: WorkshopUpdateWithoutWorkshopAddressesInput;
}
