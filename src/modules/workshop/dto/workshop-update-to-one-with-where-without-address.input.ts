import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutAddressInput } from './workshop-update-without-address.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutAddressInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutAddressInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutAddressInput)
    data!: WorkshopUpdateWithoutAddressInput;
}
